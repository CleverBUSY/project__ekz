import axios from "../axios";

class ProductsFood {
    async getProducts(){
        const res = await axios.get('/food').then(res => res.data);
        console.log(res);
        return res;      
    }
}

export default new ProductsFood();
