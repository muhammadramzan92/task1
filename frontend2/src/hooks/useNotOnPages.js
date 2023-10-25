import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { removeReportData } from '../redux/reportSlice';
import { useDispatch } from 'react-redux';

const useNotOnPages = (pagesToCheck) => {
  const location = useLocation();
const dispatch=useDispatch()
  useEffect(() => {
    const notOnSpecificPages = !pagesToCheck.some((page) => location.pathname.includes(page));
    if (notOnSpecificPages) {
dispatch(removeReportData())
    }
  }, [location.pathname, pagesToCheck]);
};

export default useNotOnPages;
