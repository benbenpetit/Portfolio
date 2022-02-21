import React, { useEffect } from 'react'
import { useParams } from "react-router";

const CaseStudy = () => {
  const { pathname } = useParams();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div>CaseStudy</div>
  )
}

export default CaseStudy