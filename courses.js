function connect() {
    url = "all_offer_courses.json"
    fetch(url)
    .then(res => res.json())
    .then(data => show(data))
}

function show(data) {
    tableBody = document.getElementById("tableBody")
    allOfferCourses = data.data.eligibleOfferCourses
    for (i=0; i<allOfferCourses.length; i++) {
        courseId = allOfferCourses[i].courseId
        courseName = allOfferCourses[i].courseName
        facultyName = allOfferCourses[i].facualtyName
        section = allOfferCourses[i].section
        timeSlot = allOfferCourses[i].timeSlot
        tempTableRow = document.createElement("tr")
        tempTableRow.innerHTML = 
            `
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${courseId}
                </th>
                <td class="px-6 py-4">
                    ${courseName}
                </td>
                <td class="px-6 py-4">
                    ${facultyName}
                </td>
                <td class="px-6 py-4">
                    ${section}
                </td>
                <td class="px-6 py-4">
                    ${timeSlot}
                </td>
            `
        tempTableRow.classList.add("bg-white")
        tempTableRow.classList.add("border-b")
        tempTableRow.classList.add("dark:bg-gray-800")
        tempTableRow.classList.add("hover:bg-gray-50")
        tempTableRow.classList.add("dark:hover:bg-gray-600")
        tableBody.appendChild(tempTableRow)
    }
}

function search_connect() {
    url = "all_offer_courses.json"
    keyword = document.getElementById("table-search").value
    fetch(url)
    .then(res => res.json())
    .then(data => search(data, keyword))
}

function search(data, keyword) {
    tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = "";
    allOfferCourses = data.data.eligibleOfferCourses
    for (i=0; i<allOfferCourses.length; i++) {
        courseId = allOfferCourses[i].courseId
        if (courseId.includes(keyword)) {
            courseName = allOfferCourses[i].courseName
            facultyName = allOfferCourses[i].facualtyName
            section = allOfferCourses[i].section
            timeSlot = allOfferCourses[i].timeSlot
            tempTableRow = document.createElement("tr")
            tempTableRow.innerHTML = 
                `
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${courseId}
                    </th>
                    <td class="px-6 py-4">
                        ${courseName}
                    </td>
                    <td class="px-6 py-4">
                        ${facultyName}
                    </td>
                    <td class="px-6 py-4">
                        ${section}
                    </td>
                    <td class="px-6 py-4">
                        ${timeSlot}
                    </td>
                `
            tempTableRow.classList.add("bg-white")
            tempTableRow.classList.add("border-b")
            tempTableRow.classList.add("dark:bg-gray-800")
            tempTableRow.classList.add("hover:bg-gray-50")
            tempTableRow.classList.add("dark:hover:bg-gray-600")
            tableBody.appendChild(tempTableRow)
        }
    }
}