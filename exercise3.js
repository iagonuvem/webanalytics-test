var testing = true;
var prev = null;

const testModeElements = document.getElementsByName('testMode');
for (var i = 0; i < testModeElements.length; i++) {
    testModeElements[i].addEventListener('change', function() {
        if (this !== prev) prev = this;
        testing = (this.value === 'true');
    });
}

const fileInput = document.getElementById('jsonInput');
fileInput.onchange = () => {
    const selectedFiles = [...fileInput.files];

    selectedFiles.map(async (file) => {
        const data = await parseJsonFile(file);
        data.map(async (item) => {

            const now = new Date();
            const currentUrl = window.location.href;

            const startDate = new Date(item.start_date);
            const endDate = new Date(item.end_date);

            if(startDate > now || endDate < now) return; // Check if date is ok

            if(currentUrl != item.site && !testing) return; // validate running site domain matches site property.

            if(item.event === 'Pageload'){
                if(!currentUrl.includes(item.event_condition) && !testing) return;

                // Re-use same function of exercise 2
                createFloodlightTag(item.floodlight_src, item.floodlight_type, item.floodlight_cat);
            }

            if(item.event === 'Click'){
                document.querySelector(item.event_condition).onclick = function (e) {
                    e.preventDefault();

                    // Re-use same function of exercise 2
                    createFloodlightTag(item.floodlight_src, item.floodlight_type, item.floodlight_cat);
                }
            }
        })
    })
}

async function parseJsonFile(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = event => resolve(JSON.parse(event.target.result))
      fileReader.onerror = error => reject(error)
      fileReader.readAsText(file)
    })
}