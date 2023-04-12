import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import DescriptionEvaluate from '../components/DescriptionEvaluate';
import EvalReport from '../components/EvalReport';
import SideMenu from '../components/SideMenu';
import SummaryEvaluate from '../components/SummaryEvaluate';

function Evaluate() {
  const[showReport, setShowReport] = useState(false)
  return (
    
    <Flex w="100%" display="flex" flexDir="row" h="900px">
      <SideMenu />
      <Flex w="100%" h="100%" display="flex" flexDir="column">
        <Flex w="100%" h="100%"  mb="15">
          <DescriptionEvaluate showReport={showReport} setShowReport={setShowReport}/>
        </Flex>
        <Flex w="100%" h="100%" mt="10">
          <SummaryEvaluate showReport={showReport}/>
        </Flex>
        <Flex px="10" pb="20" w="100%" h="100%" >
          <EvalReport showReport={showReport}/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Evaluate;
