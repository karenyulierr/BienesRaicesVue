import { ref } from 'vue';

export default function useLocationMap() {
    const zoom = ref(10)
    const center = ref([
        6.2496928,
        -75.5699686
    ])

    function pin (e){
        const marker = e.target.getLatLng()
        center.value=[marker.lat,marker.lng]
    }
    return {
        zoom,
        center,
        pin
    }
}