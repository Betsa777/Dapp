import { ethers } from 'ethers'


const Buy=({state}) =>{

    const buyChai=async(e)=>{
        e.preventDefault()
        const {contract }= state
        const name = document.querySelector("#name").value
        const message = document.querySelector("#message").value
        
        const amount ={value: ethers.parseEther("0.0001")} //v6 of ethers
        const transaction =await contract.buyChai(name,message,amount)
        await transaction.wait()
        console.log("transaction succesful");
      
    }
    return(
      <>
          <form onSubmit={buyChai}>
           
            <div className='form-group col-sm-4 '>
            {/* <label for="name">Name</label> */}
            <input type="text" id="name" className="form-control mt-2 " placeholder='Enter the name' />
            </div>

            <div className='form-group col-sm-4'>
              {/* <label for="message">Message</label> */}
              <input type="text" id="message" className='form-control mt-2 ' placeholder='Enter the message'/>
            </div>
            
            <button type="submit" className="btn btn-dark text-center mt-2">Pay</button>
          </form>
          </>
       
    )
    
}
export default Buy;