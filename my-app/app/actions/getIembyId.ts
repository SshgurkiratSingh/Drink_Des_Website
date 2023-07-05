import prisma from "@/app/libs/prismadb";
interface Iparams{
    listingId?:string
}
export default async function getItemById(params:Iparams){

    const data= await prisma.item.findFirst({
        where:{
            id:params.listingId
        }
    }) 
    if (!data){return null}
    return data;
}