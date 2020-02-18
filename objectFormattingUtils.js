module.exports = {

    getSections: function getSections(drugList){
        let newSections = []
        drugList.forEach(drug => {
            if (!newSections.includes(drug.drug.name[0])){
                newSections.push(drug.drug.name[0])
            }
        })
        return newSections
    },

    createNewData: function createNewData(drugList){
        let dataArray = []
        let sections = module.exports.getSections(drugList)
        sections.map(section => {
            let newObj = {
                title: section,
                data: []
            }
            dataArray.push(newObj)
        })
        drugList.map(drug => {
            for(let i = 0; i < dataArray.length; i++){
                if (dataArray[i]['title'] === drug.drug.name[0]){
                    dataArray[i].data.push({drug: drug})
                }
            }
        })
        return dataArray
    }

}