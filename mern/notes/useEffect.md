0. React also cleans up effects from the previous render before running the effects next time!!!!



1. Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  } 
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state


2. custom compare
   hooks only use === to compare dependency array!!!!
   
useEffect(
  () => {
    // ...
  },
  [compare(a, b)]
);

3. useCallback, useMemo, memo
useCallback, func changes only deps change
useMemo, recalcute/reevaluate only deps change
memo,    rerender only props change




4. customize useDebounce(cb, deps)

overview:
callback will be invoked many times due to deps is frequently changed!!!!!
a way to debounce it is using a delay updating deps!!!

which means untill all continue deps changes are finished, the real deps that cb dependent on can be changed finally.
and we also need one additional force update to issue a new callback effect with changed deps!!!!



details:
1. delay the deps changes and force update.                 
   --using setTimeout debouncing soluiton!!!

2. prevent debouncing function from being overwritten. 
   --using useCallback to set debouncing function

3. deps array comparison
   --deps.some((dep, idx) => {
      return dep !== depsRef.current[idx];
    }  

4. issue deps changes for every difference
   --additional changes will be canceled by setTimeout debouncing soluiton

5. async change real deps after than useEffect issued
   --using force update state to make an additional invoke for useEffect with new real deps


a more straight way
export const useDebounce = <V> (value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // clean previous timer before issuing this one by using useEffect return!!!!
    // after last value change, this setState issues final change for value and use it later to apply real deps difference to invoke useeffect 

    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}


!!!!!extreme simple version!!!
export const useDebounceSimple = (callback, deps) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(), 500);
    return () => clearTimeout(timeout);
  }, deps);
};
