
export const loadFromLocalStorage = ((key: string) => {
    try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : undefined

    } catch (err) {
        return undefined
    }
})

export const addToLocalStorage = (key: string ,value: any) => {
    try {
        localStorage.setItem(key , JSON.stringify(value));
    } catch {
        // ignore write errors
    }
};





//----------------------------------------------------------------------------------------------------------
// export const addToLocalStorage = (key: string ,value: any) => {
//     try {
//         localStorage.setItem('state', JSON.stringify(key, value));
//     } catch {
//         // ignore write errors
//     }
// };

//export const loadStartValue = () => {
// //     try {
// //         const serializedStartValue = localStorage.getItem("StratCounterValue")
// //         if(serializedStartValue === null) {
// //             return undefined
// //         }
// //         return JSON.parse(serializedStartValue)
// //     } catch (err) {
// //         return undefined
// //     }
// // }
// //
// // export const loadMaxValue = () => {
// //     try {
// //         const serializedMaxValue = localStorage.getItem("StratCounterValue")
// //         if(serializedMaxValue === null) {
// //             return undefined
// //         }
// //         return JSON.parse(serializedMaxValue)
// //
// //     } catch (err) {
// //         return undefined
// //     }
// // }
