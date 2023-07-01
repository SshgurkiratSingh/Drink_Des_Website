import prismadb from "../libs/prismadb"
export default async function getItems() {
    try {const items = await prismadb.item.findMany({orderBy:{createdAt:'desc'}})
        return items }
    catch (e: any) {throw new Error(e)}
}