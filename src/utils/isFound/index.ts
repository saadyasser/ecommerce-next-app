export const isFound = (list: any, predicate: any) => {
    const index = list.findIndex((item: any) => {

        return item.id === predicate.id;
    });

    return index !== -1
}

export default isFound