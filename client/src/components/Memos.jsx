import { Contract } from "ethers"
import { useEffect, useState } from "react"


const Memos=({state}) =>{
    const [memos,setMemo] =useState([])
    const {contract} = state
    useEffect(()=>{
        const memoMessage = async()=>{
           const memos = await contract.getMemos();
        //    console.log(memos)
        setMemo(memos)
        }
        contract && memoMessage()
    },[contract])
    return(
        <>
        <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Names</th>
      <th scope="col">TimeStamp</th>
      <th scope="col">Messages</th>
      <th scope="col">Addresses</th>
    </tr>
  </thead>
  <tbody>
  {memos.map(memo=>{
    return <>
    <tr>
      <th scope="row">{memo.name}</th>
      <td>{new Date(Number(memo.timestamp) *1000).toLocaleString()}</td>
      <td>{memo.message}</td>
      <td>{memo.from}</td>
    </tr>
    </>
    })}
 </tbody>
  </table>
         </>
    );
}
export default Memos;