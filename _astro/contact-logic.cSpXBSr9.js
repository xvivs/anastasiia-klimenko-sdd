async function n(e,t,r){try{if(!t||typeof t.writeText!="function")throw new Error("no clipboard");return await t.writeText(e),"copied"}catch{return r(),"failed"}}export{n as c};
