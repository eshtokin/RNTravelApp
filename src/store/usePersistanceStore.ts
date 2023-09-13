import {useEffect} from 'react'
import {AsyncTrunk} from 'mobx-sync'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function usePersistedData(store: any) {
  useEffect(() => {
    const init = async () => {
      const persist = await new AsyncTrunk(store, {storage: AsyncStorage})
      persist.init()
    }

    init()
  }, [store])
}
