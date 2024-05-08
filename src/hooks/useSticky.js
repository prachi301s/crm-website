import { useEffect, useState,  useCallback } from 'react'

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  // const element = useRef(null);

  const handleScroll = useCallback(() => {
    // window.pageYOffset > element?.current?.getBoundingClientRect()?.bottom
    window.pageYOffset > 200 ? setSticky(true) : setSticky(false)
  }, [])
  // This function handle the scroll performance issue
  const debounce = useCallback((func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll))
    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // }, [handleScroll]);
  }, [debounce, handleScroll])

  // return { isSticky, element };
  return { isSticky }
}

export default useSticky
