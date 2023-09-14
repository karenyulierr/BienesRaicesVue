import { computed } from 'vue';
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {

    const db=useFirestore();
    const propiedadesCollection = useCollection(collection(db,'propiedades'));

    const priceProperty = computed(()=>{
        return (precie)=>
            Number(precie).toLocaleString('en-US',{
                style:'currency',
                currency:'USD'
            })
    })

    return {
        propiedadesCollection,
        priceProperty
    }
}