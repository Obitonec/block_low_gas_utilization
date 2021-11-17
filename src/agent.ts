import { 
  BlockEvent, 
  Finding, 
  HandleBlock, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl
} from 'forta-agent'

import Web3 from "web3"

const web3 = new Web3(getJsonRpcUrl())
const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];
  const limit = parseInt(blockEvent.block.gasLimit,16)
  const used = parseInt(blockEvent.block.gasUsed,16)
  let percent = used/limit*100
  if (percent <20) {
    findings.push(
      Finding.fromObject({
        name: "LOW_GAS_UTILIZATION",
        description: `Gas utilization <20% of gas limit `,
        alertId: "FORTA-2000",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
       

      })
    )
  }

  
 
  
  return findings;
}

export default {
  handleBlock
}