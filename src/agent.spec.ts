import {
    createBlockEvent,
    HandleBlock
  } from "forta-agent"
  import agent from "./agent"
  
  describe("diffchanged agent", () => {
    let handleBlock: HandleBlock
  
    const createTxEventWithGas= () => createBlockEvent({
      type:{} as any,
      block:{
          difficulty: "",
          gasLimit :"0x64",
          extraData:{} as any,
          gasUsed:"0xA",
          hash:"",
          miner:"",
          logsBloom:"",
          mixHash:"",
          nonce:"",
          number:1,
          parentHash:"",
          receiptsRoot:"",
          sha3Uncles:"",
          size:"",
          stateRoot:"",
          timestamp:1,
          totalDifficulty:"",
          transactions: {} as any,
          transactionsRoot:'',
          uncles:[]
      }
    })
  
    beforeAll(() => {
      handleBlock = agent.handleBlock
    })
  
    describe("handle block", () => {
      it("gas used", async () => {
        const txEvent = createTxEventWithGas()
  
        const findings = await handleBlock(txEvent)
  
        expect(findings.length).toBe(1)
      })
  
      
    })
  })