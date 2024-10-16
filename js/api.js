const petro = document.getElementById('Petro')
const albuq = document.getElementById('Albuquerque')
const tucson = document.getElementById('Tucson')
const tayinsha = document.getElementById('Tayinsha')
const chernobyl = document.getElementById('Chernobyl')
async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m')
    const respons_albuq = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.0845&longitude=-106.6511&current=temperature_2m')
    const respons_tucs = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m')
    const respons_tayns = await fetch('https://api.open-meteo.com/v1/forecast?latitude=53.2833&longitude=69.4&current=temperature_2m')
    const respons_chern = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.2904&longitude=25.9324&current=temperature_2m')    
        
    const data_petro = await respons_petro.json()
    const data_albuq = await respons_albuq.json()
    const data_tucs = await respons_tucs.json()
    const data_tayns = await respons_tayns.json()
    const data_chern = await respons_chern.json()
    return [data_petro, data_albuq, data_tucs, data_tayns, data_chern]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C `
        albuq.textContent =`Air temperature: ${out[1].current.temperature_2m} \u00B0C `
        tucson.textContent=`Air temperature: ${out[2].current.temperature_2m} \u00B0C `
        tayinsha.textContent=`Air temperature: ${out[3].current.temperature_2m} \u00B0C `
        chernobyl.textContent=`Air temperature: ${out[4].current.temperature_2m} \u00B0C `

    }
    catch(error){
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()