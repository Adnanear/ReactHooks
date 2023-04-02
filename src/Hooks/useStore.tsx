import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react';

type Store = Record<string, string>;
const useStoreData = <T extends Store>(data: T) => {
  const store = useRef<T>(data);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());
  const set = useCallback((fields: Partial<typeof store.current>) => {
    store.current = { ...store.current, ...fields };
    return subscribers.current.forEach((cb) => cb?.());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return {
    get,
    set,
    subscribe,
  };
};
type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

const StoreContext = createContext<UseStoreDataReturnType | null>(null);
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useStoreData({
    lastName: 'Aref',
    age: '23',
  })!;

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('ContextStore provider not found.');

  const state = useSyncExternalStore(store.subscribe, store.get);

  return [state, store.set] as const;
};
