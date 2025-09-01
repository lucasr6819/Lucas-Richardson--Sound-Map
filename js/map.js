// Initialize the map centered on Vermont
const map = L.map('map').setView([43.6591, -72.9889], 8);

// Define map styles
const mapStyles = {
    streets: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors',
        name: 'OpenStreetMap'
    },
    satellite: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        name: 'Satellite'
    },
    dark: {
        url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        name: 'Dark Mode'
    },
    topo: {
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
        name: 'Topographic'
    }
};

// Initialize with default style (streets)
let currentLayer = L.tileLayer(mapStyles.streets.url, {
    attribution: mapStyles.streets.attribution
}).addTo(map);

// Function to switch map styles
function switchMapStyle(style) {
    if (currentLayer) {
        map.removeLayer(currentLayer);
    }
    currentLayer = L.tileLayer(mapStyles[style].url, {
        attribution: mapStyles[style].attribution
    }).addTo(map);
}

// Add event listener for style switcher
document.getElementById('map-style').addEventListener('change', function(e) {
    switchMapStyle(e.target.value);
});

// Create and add the heatmap layer with improved configuration
const heat = L.heatLayer(heatmapData, {
    radius: 30,
    blur: 20,
    maxZoom: 12,
    max: 1.0,
    gradient: {
        0.2: '#3288bd', // Low noise (blue)
        0.4: '#99d594', // Moderate-low (green)
        0.6: '#fee08b', // Moderate (yellow)
        0.8: '#fc8d59', // Moderate-high (orange)
        1.0: '#d53e4f'  // High noise (red)
    }
}).addTo(map);

// Add a legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info legend');
    const grades = [20, 40, 60, 80, 100];
    const labels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];
    
    div.style.backgroundColor = 'white';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.4)';
    
    div.innerHTML = '<h4>Noise Level</h4>';
    
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorForGrade(grades[i]) + '; width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7"></i> ' +
            labels[i] + '<br style="clear: both;">';
    }
    return div;
};
legend.addTo(map);

// Helper function to get colors for legend
function getColorForGrade(grade) {
    return grade <= 20 ? '#3288bd' :
           grade <= 40 ? '#99d594' :
           grade <= 60 ? '#fee08b' :
           grade <= 80 ? '#fc8d59' :
                        '#d53e4f';
}

// Function to create popup content
function createPopupContent(data) {
    return `
        <div style="max-width: 500px; max-height: 600px; overflow-y: auto;">
            <h3>${data.name}</h3>
            
            <h4>Location</h4>
            <p>
                City: ${data.location.city}<br>
                County: ${data.location.county}<br>
                State: ${data.location.state}<br>
                Coordinates: ${data.location.coordinates.latitude}, ${data.location.coordinates.longitude}
            </p>

            <h4>Noise Data</h4>
            <p><strong>Primary Source:</strong> ${data.noise_data.primary_source}</p>
            
            ${data.noise_data.decibel_levels.minimum ? `
                <p><strong>Decibel Levels:</strong></p>
                <ul>
                    <li>Minimum: ${data.noise_data.decibel_levels.minimum} dB</li>
                    <li>Maximum: ${data.noise_data.decibel_levels.maximum} dB</li>
                    <li>Average: ${data.noise_data.decibel_levels.average} dB</li>
                    ${data.noise_data.decibel_levels.median ? `<li>Median: ${data.noise_data.decibel_levels.median} dB</li>` : ''}
                    ${data.noise_data.decibel_levels.standard_deviation ? `<li>Standard Deviation: ${data.noise_data.decibel_levels.standard_deviation} dB</li>` : ''}
                    ${data.noise_data.decibel_levels.measurement_type ? `<li>Measurement Type: ${data.noise_data.decibel_levels.measurement_type}</li>` : ''}
                </ul>
            ` : ''}
            
            ${data.noise_data.decibel_levels.residential_day ? `
                <p><strong>Municipal Limits:</strong></p>
                <ul>
                    <li>Residential (Day): ${data.noise_data.decibel_levels.residential_day} dB</li>
                    <li>Residential (Night): ${data.noise_data.decibel_levels.residential_night} dB</li>
                    <li>Commercial (Day): ${data.noise_data.decibel_levels.commercial_day} dB</li>
                    <li>Commercial (Night): ${data.noise_data.decibel_levels.commercial_night} dB</li>
                </ul>
            ` : ''}

            <h4>Affected Area</h4>
            ${data.noise_data.affected_area.total_acres ? `
                <ul>
                    <li>Total Acres: ${data.noise_data.affected_area.total_acres}</li>
                    <li>Population Impacted: ${data.noise_data.affected_area.population_impacted}</li>
                    <li>Housing Units Affected: ${data.noise_data.affected_area.housing_units_affected}</li>
                </ul>
            ` : ''}
            ${data.noise_data.affected_area.zone ? `
                <p><strong>Zone:</strong> ${data.noise_data.affected_area.zone}</p>
            ` : ''}
            ${data.noise_data.affected_area.description ? `
                <p><strong>Description:</strong> ${data.noise_data.affected_area.description}</p>
            ` : ''}
            ${data.noise_data.affected_area.communities ? `
                <p><strong>Affected Communities:</strong> ${data.noise_data.affected_area.communities.join(', ')}</p>
            ` : ''}

            <h4>Seasonal Variations</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background: #f0f0f0;">
                    <th style="padding: 5px; border: 1px solid #ddd;">Season</th>
                    <th style="padding: 5px; border: 1px solid #ddd;">Activity</th>
                    <th style="padding: 5px; border: 1px solid #ddd;">Details</th>
                    <th style="padding: 5px; border: 1px solid #ddd;">Decibels</th>
                </tr>
                ${Object.entries(data.seasonal_variations).map(([season, info]) => `
                    <tr>
                        <td style="padding: 5px; border: 1px solid #ddd;">${season}</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${info.activity_level}</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${info.details}</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${info.decibel_range}</td>
                    </tr>
                `).join('')}
            </table>

            <h4>Time Patterns</h4>
            <ul>
                ${data.time_patterns.peak_hours ? `<li><strong>Peak Hours:</strong> ${data.time_patterns.peak_hours}</li>` : ''}
                ${data.time_patterns.operating_hours ? `<li><strong>Operating Hours:</strong> ${data.time_patterns.operating_hours}</li>` : ''}
                ${data.time_patterns.overnight_activity ? `<li><strong>Overnight Activity:</strong> ${data.time_patterns.overnight_activity}</li>` : ''}
                ${data.time_patterns.frequency ? `<li><strong>Frequency:</strong> ${data.time_patterns.frequency}</li>` : ''}
                ${data.time_patterns.restrictions ? `<li><strong>Restrictions:</strong> ${data.time_patterns.restrictions}</li>` : ''}
                ${data.time_patterns.worst_periods ? `<li><strong>Worst Periods:</strong> ${data.time_patterns.worst_periods}</li>` : ''}
            </ul>

            <h4>Health Impact</h4>
            <p><strong>Risk Level:</strong> ${data.health_impact.risk_level}</p>
            <p><strong>Effects:</strong></p>
            <ul>
                ${data.health_impact.effects.map(effect => `<li>${effect}</li>`).join('')}
            </ul>
            ${data.health_impact.community_response ? `
                <p><strong>Community Response:</strong> ${data.health_impact.community_response}</p>
            ` : ''}

            <h4>Mitigation Programs</h4>
            <ul>
                <li><strong>Status:</strong> ${data.mitigation_programs.active ? 'Active' : 'Inactive'}</li>
                ${data.mitigation_programs.funding ? `<li><strong>Funding:</strong> ${data.mitigation_programs.funding}</li>` : ''}
                ${data.mitigation_programs.measures ? `<li><strong>Measures:</strong> ${Array.isArray(data.mitigation_programs.measures) ? data.mitigation_programs.measures.join(', ') : data.mitigation_programs.measures}</li>` : ''}
                ${data.mitigation_programs.oversight ? `<li><strong>Oversight:</strong> ${data.mitigation_programs.oversight}</li>` : ''}
                ${data.mitigation_programs.proposed ? `<li><strong>Proposed:</strong> ${data.mitigation_programs.proposed}</li>` : ''}
                ${data.mitigation_programs.enforcement ? `<li><strong>Enforcement:</strong> ${data.mitigation_programs.enforcement}</li>` : ''}
            </ul>

            ${data.study_metadata ? `
                <h4>Study Information</h4>
                <ul>
                    ${data.study_metadata.study_type ? `<li><strong>Study Type:</strong> ${data.study_metadata.study_type}</li>` : ''}
                    ${data.study_metadata.methodology ? `<li><strong>Methodology:</strong> ${data.study_metadata.methodology}</li>` : ''}
                    ${data.study_metadata.sampling_sites ? `<li><strong>Sampling Sites:</strong> ${data.study_metadata.sampling_sites}</li>` : ''}
                    ${data.study_metadata.spatial_resolution ? `<li><strong>Spatial Resolution:</strong> ${data.study_metadata.spatial_resolution}</li>` : ''}
                    ${data.study_metadata.model_error ? `<li><strong>Model Error:</strong> ${data.study_metadata.model_error}</li>` : ''}
                    ${data.study_metadata.study_area ? `<li><strong>Study Area:</strong> ${data.study_metadata.study_area}</li>` : ''}
                </ul>
                
                ${data.study_metadata.publication_info ? `
                    <p><strong>Publication Information:</strong></p>
                    <ul>
                        <li>Journal: ${data.study_metadata.publication_info.journal}</li>
                        <li>Volume: ${data.study_metadata.publication_info.volume}</li>
                        <li>Article: ${data.study_metadata.publication_info.article_number}</li>
                        <li>Year: ${data.study_metadata.publication_info.publication_year}</li>
                        <li>DOI: ${data.study_metadata.publication_info.doi}</li>
                    </ul>
                ` : ''}
                
                ${data.study_metadata.funding_source ? `
                    <p><strong>Funding Source:</strong> ${data.study_metadata.funding_source}</p>
                ` : ''}
            ` : ''}

            <h4>Verified Sources</h4>
            <ul>
                ${data.verified_sources.map(source => `
                    <li>
                        <a href="${source.url}" target="_blank">${source.title}</a>
                        <br>
                        <small>Type: ${source.type} (Accessed: ${source.date_accessed})</small>
                        ${source.authors ? `<br><small>Authors: ${source.authors}</small>` : ''}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Add markers for all Vermont locations
const btvMarker = L.marker([airportData.location.coordinates.latitude, airportData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(airportData))
    .addTo(map);

const winooskiMarker = L.marker([winooskiData.location.coordinates.latitude, winooskiData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(winooskiData))
    .addTo(map);

const benningtonMarker = L.marker([benningtonData.location.coordinates.latitude, benningtonData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(benningtonData))
    .addTo(map);

const randolphMarker = L.marker([randolphData.location.coordinates.latitude, randolphData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(randolphData))
    .addTo(map);

const highwayMarker = L.marker([highwayData.location.coordinates.latitude, highwayData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(highwayData))
    .addTo(map);

const forestryMarker = L.marker([forestryData.location.coordinates.latitude, forestryData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(forestryData))
    .addTo(map);

const stoweMarker = L.marker([stoweData.location.coordinates.latitude, stoweData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(stoweData))
    .addTo(map);

const killingtonMarker = L.marker([killingtonData.location.coordinates.latitude, killingtonData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(killingtonData))
    .addTo(map);

const constructionMarker = L.marker([constructionData.location.coordinates.latitude, constructionData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(constructionData))
    .addTo(map);

const dollardMarker = L.marker([dollardStationData.location.coordinates.latitude, dollardStationData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(dollardStationData))
    .addTo(map);

const dorvalMarker = L.marker([dorvalStationData.location.coordinates.latitude, dorvalStationData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(dorvalStationData))
    .addTo(map);

const saintLaurentMarker = L.marker([saintLaurentStationData.location.coordinates.latitude, saintLaurentStationData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(saintLaurentStationData))
    .addTo(map);

const coteSaintLucMarker = L.marker([coteSaintLucStationData.location.coordinates.latitude, coteSaintLucStationData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(coteSaintLucStationData))
    .addTo(map);

// Adjust map bounds to include all markers
// Add new Montreal area markers
const saintSulpiceMarker = L.marker([saintSulpiceStationData.location.coordinates.latitude, saintSulpiceStationData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(saintSulpiceStationData))
    .addTo(map);

const trudeauAirportMarker = L.marker([trudeauAirportData.location.coordinates.latitude, trudeauAirportData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(trudeauAirportData))
    .addTo(map);

const mcgillCampusMarker = L.marker([mcgillCampusData.location.coordinates.latitude, mcgillCampusData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(mcgillCampusData))
    .addTo(map);

const marshallObservatoryMarker = L.marker([marshallObservatoryData.location.coordinates.latitude, marshallObservatoryData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(marshallObservatoryData))
    .addTo(map);

const etsCampusMarker = L.marker([etsCampusData.location.coordinates.latitude, etsCampusData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(etsCampusData))
    .addTo(map);

const hochelagaMarker = L.marker([hochelagaData.location.coordinates.latitude, hochelagaData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(hochelagaData))
    .addTo(map);

const westmountMarker = L.marker([westmountData.location.coordinates.latitude, westmountData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(westmountData))
    .addTo(map);

const rsqaEastMarker = L.marker([rsqaEastData.location.coordinates.latitude, rsqaEastData.location.coordinates.longitude])
    .bindPopup(() => createPopupContent(rsqaEastData))
    .addTo(map);

// Adjust map bounds to include all markers
const markers = [
    btvMarker, 
    winooskiMarker, 
    benningtonMarker, 
    randolphMarker, 
    highwayMarker, 
    forestryMarker, 
    stoweMarker, 
    killingtonMarker, 
    constructionMarker, 
    dollardMarker, 
    dorvalMarker, 
    saintLaurentMarker, 
    coteSaintLucMarker,
    saintSulpiceMarker,
    trudeauAirportMarker,
    mcgillCampusMarker,
    marshallObservatoryMarker,
    etsCampusMarker,
    hochelagaMarker,
    westmountMarker,
    rsqaEastMarker
];
    
const group = new L.featureGroup(markers);
map.fitBounds(group.getBounds().pad(0.1));

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    let debounceTimer;

    // Debounce function to improve performance
    function debounce(func, wait) {
        return function executedFunction() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Improved search function with better filtering
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        // Show loading indicator
        const loadingDiv = document.querySelector('.loading');
        if (loadingDiv) loadingDiv.style.display = 'block';

        const results = markers.filter(marker => {
            const data = marker.getPopup().getContent();
            const content = typeof data === 'function' ? data() : data;
            
            // Search through multiple fields
            const searchFields = [
                content.match(/<h3>(.*?)<\/h3>/)?.[1] || '', // Name
                content.match(/Primary Source:<\/strong> (.*?)</)?.[1] || '', // Source
                content.match(/Risk Level:<\/strong> (.*?)</)?.[1] || '', // Risk Level
                content.match(/Zone:<\/strong> (.*?)</)?.[1] || '' // Zone
            ];

            return searchFields.some(field => 
                field.toLowerCase().includes(searchTerm)
            );
        });

        displayResults(results);
        if (loadingDiv) loadingDiv.style.display = 'none';
    }

    // Enhanced results display with more information
    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><p>No results found</p></div>';
        } else {
            results.forEach(marker => {
                const data = marker.getPopup().getContent();
                const content = typeof data === 'function' ? data() : data;
                const div = document.createElement('div');
                div.className = 'search-result-item';
                
                const nameMatch = content.match(/<h3>(.*?)<\/h3>/);
                const name = nameMatch ? nameMatch[1] : 'Unknown Location';
                
                const decibelMatch = content.match(/Average:\s*(\d+\.?\d*)\s*dB/);
                const decibels = decibelMatch ? decibelMatch[1] : 'N/A';
                
                const riskMatch = content.match(/Risk Level:<\/strong> (.*?)</);
                const riskLevel = riskMatch ? riskMatch[1] : 'Unknown';
                
                div.innerHTML = `
                    <h4>${name}</h4>
                    <p>Average Noise Level: ${decibels} dB</p>
                    <p>Risk Level: ${riskLevel}</p>
                `;
                
                div.addEventListener('click', () => {
                    const latLng = marker.getLatLng();
                    map.setView(latLng, 13);
                    marker.openPopup();
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                });
                
                searchResults.appendChild(div);
            });
        }
        searchResults.style.display = 'block';
    }

    // Event listeners with debouncing
    const debouncedSearch = debounce(performSearch, 300);
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', debouncedSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        } else if (e.key === 'Escape') {
            searchResults.style.display = 'none';
            searchInput.value = '';
        }
    });

    // Improved click-outside handling
    document.addEventListener('click', (e) => {
        const isClickInside = searchResults.contains(e.target) || 
                            searchInput.contains(e.target) || 
                            searchButton.contains(e.target);
        if (!isClickInside) {
            searchResults.style.display = 'none';
        }
    });
}

// Initialize search after map and markers are ready
initializeSearch();

