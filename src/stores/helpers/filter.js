export function isCorrespondToFilter(item, filterObj) {
  let foundResult
  // city
  if (filterObj.city && filterObj.city.length !== 0) {
    for (const key in filterObj.city) {
      if (item.city == filterObj.city[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  // experience
  if (filterObj.experience && filterObj.experience.length !== 0) {
    for (const key in filterObj.experience) {
      if (item.experience == filterObj.experience[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  // format
  if (filterObj.format && filterObj.format.length !== 0) {
    for (const key in filterObj.format) {
      if (item.format == filterObj.format[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  // language
  if (filterObj.language && filterObj.language.length !== 0) {
    for (const key in filterObj.language) {
      if (item.language == filterObj.language[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  // profession
  if (filterObj.profession && filterObj.profession.length !== 0) {
    for (const key in filterObj.profession) {
      if (item.profession == filterObj.profession[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  // salary
  if (filterObj.salary && filterObj.salary.length !== 0) {
    for (const key in filterObj.salary) {
      const salaryLimits = filterObj.salary[key].split('to')
      if (salaryLimits.length === 1 && salaryLimits[0] == 500) {
        if (item.salary <= 500) foundResult = true
      }
      if (salaryLimits.length === 1 && salaryLimits[0] == 10000) {
        if (item.salary >= 10000) foundResult = true
      }
      if (salaryLimits.length === 2) {
        if (parseInt(salaryLimits[0]) <= item.salary && item.salary <= parseInt(salaryLimits[1]))
          foundResult = true
      }
    }

    if (!foundResult) return false
    foundResult = null
  }

  // type
  if (filterObj.type && filterObj.type.length !== 0) {
    for (const key in filterObj.type) {
      if (item.type == filterObj.type[key]) foundResult = true
    }
    if (!foundResult) return false
    foundResult = null
  }

  //search
  if (filterObj.search && !item.title.toLowerCase().includes(filterObj.search.toLowerCase()))
    return false

  return true
}
