/* eslint-disable react/display-name */
import { useEffect } from 'react'
import { combination } from './combination'
import { forEachByKeys } from './utils/forEachByKeys'

function createSubscription({ subscribe, notification }, store) {
  return function bindSubject(subject) {
    let subscription = null
    subscription = subject.subscribe({
      next(value) {
        if (value === null) {
          return
        }
        // 代理订阅中的事件不包含 eventTargetMeta ,因为它不是一个标准的公共通道事件
        if (!value.eventTargetMeta && notification) {
          if (!notification[value.fnKey]) {
            throw new Error(
              `调用失败, ${store.name} 组件的 notification 上不存在 ${value.fnKey} 方法`
            )
          }
          return notification?.[value?.fnKey]?.call(
            store,
            value.data,
            value.next
          )
        }
        const { componentName, subjectKey, fnKey, sid } = value?.eventTargetMeta
        const handle = () => {
          subscribe?.[subjectKey]?.[componentName]?.[fnKey]?.call(
            store,
            value.data,
            sid
          )
        }
        if (subjectKey === 'state') {
          setTimeout(() => {
            handle()
          }, 33)
        } else {
          handle()
        }
      },
    })
    return subscription
  }
}
function createRouterSubscription(storeConfig, store) {
  if (storeConfig.router) {
    return combination.routerSubjects[store.name].subscribe({
      next(value) {
        if (value) {
          storeConfig.router[value.subjectKey].call(store, value.arg)
        }
      },
    })
  }
}
function createSelfSubscription(bindSubject, storeConfig, store) {
  if (storeConfig.notification) {
    return bindSubject(combination.proxySubjects[store.name])
  }
}
export function useSubscribe(storeConfig, store) {
  useEffect(() => {
    const subscriptions = []
    const bindSubject = createSubscription(storeConfig, store)
    if (storeConfig.subscribe) {
      const subscribeNames = combination.subscribeNames[store.name]
      forEachByKeys(subscribeNames, (subjectKey) => {
        subscribeNames[subjectKey].forEach((subscribeComponentKey) => {
          const reg = new RegExp(`^${subscribeComponentKey}`)
          const componentKeys = Object.keys(combination.components)
          const targets = componentKeys.filter((componentKey) => {
            return reg.test(componentKey)
          })
          targets.forEach((target) => {
            const subscription = bindSubject(
              combination.components[target].subjects[subjectKey]
            )
            subscriptions.push(subscription)
          })
        })
      })
    }
    const routerSubscription = createRouterSubscription(storeConfig, store)
    const selfSubscription = createSelfSubscription(
      bindSubject,
      storeConfig,
      store
    )
    return () => {
      subscriptions.forEach((sub) => {
        sub.unsubscribe()
      })
      routerSubscription?.unsubscribe()
      selfSubscription?.unsubscribe()
    }
  }, [])
}
