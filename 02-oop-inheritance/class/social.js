export const Social = {
    share:function share(friendName){
        return (this.tittle+" shared by "+ friendName);
    },
    like:function like(friendName){
        return(friendName+" likes "+  this.tittle);
    }
}
