const methodologyContent = {
    title: "Data Sources & Methodology",
    content: `
        <h2>Data Sources & Methodology</h2>
        
        <h3>Overview</h3>
        <p>This noise pollution mapping project integrates data from multiple monitoring stations across Vermont (United States) and Montreal (Canada) regions, providing a comprehensive visualization of urban and rural noise levels through an interactive web-based platform.</p>
        
        <h3>Data Sources</h3>
        <p>The data presented in this map comes from three primary sources:</p>
        <ul>
            <li><strong>Municipal Monitoring Stations:</strong> Fixed noise monitoring equipment operated by city governments in both Vermont and Montreal metropolitan areas.</li>
            <li><strong>Academic Research Studies:</strong> Data collected through specialized research projects conducted by universities, including McGill University and the University of Vermont.</li>
            <li><strong>Environmental Agency Networks:</strong> Continuous monitoring systems operated by environmental protection agencies in both regions.</li>
        </ul>

        <h3>Data Collection Methods</h3>
        <p>Noise measurements were collected using:</p>
        <ul>
            <li>Calibrated sound level meters meeting ANSI Type 1 and Type 2 standards</li>
            <li>Continuous 24-hour monitoring stations at fixed locations</li>
            <li>Mobile measurement units for temporary monitoring sites</li>
            <li>Both A-weighted (dBA) and C-weighted (dBC) decibel scales to capture different noise frequencies</li>
        </ul>

        <h3>Data Integration Process</h3>
        <p>The displayed information undergoes several processing steps:</p>
        <ol>
            <li>Raw data collection at 15-minute intervals</li>
            <li>Quality control checks to identify and remove anomalous readings</li>
            <li>Statistical analysis to calculate average, minimum, and maximum values</li>
            <li>Spatial interpolation to create continuous noise coverage maps</li>
            <li>Integration with demographic and land-use data for impact assessment</li>
        </ol>

        <h3>Map Visualization</h3>
        <p>The interactive map offers multiple visualization options:</p>
        <ul>
            <li><strong>Point Data:</strong> Individual monitoring stations with detailed noise metrics</li>
            <li><strong>Heat Maps:</strong> Interpolated noise levels showing spatial distribution</li>
            <li><strong>Time Patterns:</strong> Temporal variations in noise levels throughout day and night</li>
            <li><strong>Impact Zones:</strong> Areas exceeding recommended noise thresholds</li>
        </ul>

        <h3>Verification & Updates</h3>
        <p>Data quality is maintained through:</p>
        <ul>
            <li>Regular calibration of monitoring equipment</li>
            <li>Cross-validation with multiple data sources</li>
            <li>Peer review of methodologies and results</li>
            <li>Monthly updates of monitoring station data</li>
        </ul>

        <h3>Usage Notes</h3>
        <p>When interpreting the data, please consider:</p>
        <ul>
            <li>Measurements represent typical conditions but may not capture all extreme events</li>
            <li>Seasonal variations can affect noise levels significantly</li>
            <li>Local terrain and building structures influence sound propagation</li>
            <li>Some locations may have limited temporal coverage</li>
        </ul>
    `
};`
