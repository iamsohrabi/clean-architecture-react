export class APIBaee{
    static GetUrl(endPoint: string, currentPage: number, pageSize: number) {
        return `https://jsonplaceholder.typicode.com/${endPoint}?_page=${currentPage}&_limit=${pageSize}`;
    }
}