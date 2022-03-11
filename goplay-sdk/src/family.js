// (3-4) library source code
import SimpleDateFormat from "SDF";

export default class Tom {
    sayHello() {
        const date = new Date();
        const sdf = new SimpleDateFormat();
        return `Hi, I am Tom. Today is ${sdf.formatWith("yyyy-MM-dd'T'HH:mm:ssXXX", date)}`;
    }
}