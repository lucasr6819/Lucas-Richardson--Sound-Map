// Burlington International Airport Data
const airportData = {
    "id": 1,
    "name": "Burlington International Airport (BTV)",
    "location": {
        "city": "South Burlington",
        "county": "Chittenden",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.4719,
            "longitude": -73.1532
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (commercial and military F-35s)",
        "decibel_levels": {
            "minimum": 65,
            "maximum": 75,
            "average": 70,
            "measurement_type": "DNL (Day-Night Average Sound Level)",
            "measurement_distance": "Various distances from runway"
        },
        "affected_area": {
            "total_acres": 2600,
            "population_impacted": 6125,
            "housing_units_affected": 2640,
            "communities": ["Winooski", "Williston", "Burlington", "South Burlington", "Essex", "Colchester"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Increased training operations",
            "decibel_range": "65-75"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak commercial traffic and F-35 training",
            "decibel_range": "65-75+"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continued operations with leaf-peeper flights",
            "decibel_range": "65-75"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Reduced operations due to weather",
            "decibel_range": "65-70"
        }
    },
    "time_patterns": {
        "peak_hours": "7:00 AM - 10:00 PM",
        "overnight_restrictions": "Limited F-35 night operations",
        "worst_periods": "Morning and evening commercial traffic"
    },
    "health_impact": {
        "risk_level": "High",
        "effects": ["Sleep disruption", "Hearing damage risk", "Cardiovascular stress", "Property value impacts"],
        "vulnerable_populations": ["Children in schools", "Elderly residents", "Noise-sensitive individuals"]
    },
    "verified_sources": [
        {
            "title": "BTV Sound Mitigation Program",
            "url": "https://www.btvsound.com/",
            "type": "Official Airport Documentation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "New air traffic noise maps show tripling of affected homes",
            "url": "https://vtdigger.org/2019/05/29/new-air-traffic-noise-maps-show-tripling-affected-homes-people-2023/",
            "type": "News Investigation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "BTV sound mitigation program creeping forward",
            "url": "https://www.wcax.com/2023/09/08/btv-sound-mitigation-program-creeping-forward/",
            "type": "News Report",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Federal Register - Noise Exposure Map Notice",
            "url": "https://www.federalregister.gov/documents/2019/10/10/2019-22221/noise-exposure-map-notice-burlington-international-airport-south-burlington-vermont",
            "type": "Federal Documentation",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "FAA grants",
        "measures": ["Sound insulation", "Window/door replacement", "Home buyouts"],
        "annual_budget": "$5.5 million (2023)"
    }
};

// Winooski Aircraft Impact Zone Data
const winooskiData = {
    "id": 2,
    "name": "Winooski Aircraft Impact Zone",
    "location": {
        "city": "Winooski",
        "county": "Chittenden",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.4906,
            "longitude": -73.1817
        }
    },
    "noise_data": {
        "primary_source": "Burlington Airport aircraft overhead",
        "decibel_levels": {
            "minimum": 65,
            "maximum": 75,
            "average": 68,
            "measurement_type": "DNL",
            "measurement_distance": "Ground level residential areas"
        },
        "affected_area": {
            "percentage_of_city": 50,
            "population_percentage": 40,
            "description": "Half of city within noise contour"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "F-35 training increases",
            "decibel_range": "65-75"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak tourism and military training",
            "decibel_range": "65-75+"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continued high traffic",
            "decibel_range": "65-75"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Weather-dependent reductions",
            "decibel_range": "65-70"
        }
    },
    "time_patterns": {
        "peak_hours": "6:00 AM - 11:00 PM",
        "overnight_activity": "Minimal",
        "worst_periods": "F-35 training windows"
    },
    "health_impact": {
        "risk_level": "High",
        "effects": ["Conversation disruption", "Sleep interference", "Outdoor activity limitations"],
        "community_response": "City council resolutions opposing F-35 operations"
    },
    "verified_sources": [
        {
            "title": "Winooski Airport Sound Mitigation",
            "url": "https://www.winooskivt.gov/1392/Learn-About-Airport-Sound-Mitigation",
            "type": "Municipal Documentation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "More High Noise Expected Near Burlington Airport",
            "url": "https://www.usnews.com/news/best-states/vermont/articles/2019-05-31/study-says-more-high-noise-expected-near-burlington-airport",
            "type": "News Report",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "participation": "BTV sound mitigation program",
        "eligible_homes": "100+ households in phase one"
    }
};

// Bennington Downtown Traffic Corridor Data
const benningtonData = {
    "id": 3,
    "name": "Bennington Downtown Traffic Corridor",
    "location": {
        "city": "Bennington",
        "county": "Bennington",
        "state": "Vermont",
        "coordinates": {
            "latitude": 42.8781,
            "longitude": -73.1967
        }
    },
    "noise_data": {
        "primary_source": "Vehicle traffic with loud exhaust systems",
        "decibel_levels": {
            "residential_day": 60,
            "residential_night": 45,
            "commercial_day": 70,
            "commercial_night": 55,
            "measurement_type": "Municipal ordinance limits",
            "violations": "Frequent muffler violations reported"
        },
        "affected_area": {
            "zone": "Downtown commercial and adjacent residential",
            "primary_streets": "Main Street corridor"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Motorcycle season begins",
            "decibel_range": "55-70"
        },
        "summer": {
            "activity_level": "High",
            "details": "Peak motorcycle and tourism traffic",
            "decibel_range": "60-75"
        },
        "fall": {
            "activity_level": "High",
            "details": "Leaf-peeper traffic increases",
            "decibel_range": "60-70"
        },
        "winter": {
            "activity_level": "Low",
            "details": "Reduced motorcycle activity",
            "decibel_range": "50-65"
        }
    },
    "time_patterns": {
        "peak_hours": "5:00 PM - 9:00 PM",
        "frequency": "Every few minutes during peak",
        "worst_periods": "Weekend evenings"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": ["Conversation interruption", "Outdoor enjoyment disruption", "Stress increase"],
        "community_complaints": "Regular resident complaints to selectboard"
    },
    "verified_sources": [
        {
            "title": "Bennington resident wants town to address downtown noise",
            "url": "https://www.benningtonbanner.com/local-news/bennington-vermont-resident-martha-mackey-wants-town-to-address-loud-mufflers-downtown-noise/article_5f687f78-9461-11ee-92b2-1788fdaac732.html",
            "type": "Local News Investigation",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": false,
        "proposed": "Pedestrian-only streets consideration",
        "enforcement": "Municipal noise ordinance #24"
    }
};

// Randolph Ridge Road Quarry Data
const randolphData = {
    "id": 4,
    "name": "Randolph Ridge Road Quarry (I-89 Corridor)",
    "location": {
        "city": "Randolph",
        "county": "Orange",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.0306,
            "longitude": -72.6619
        }
    },
    "noise_data": {
        "primary_source": "Quarry operations and I-89 traffic",
        "decibel_levels": {
            "baseline_measured": "Background ambient levels recorded",
            "operational_levels": "Modeled for compliance",
            "property_line_limits": "State and local limits enforced",
            "measurement_type": "Professional acoustic study"
        },
        "affected_area": {
            "zone": "Neighboring residences and I-89 corridor",
            "study_scope": "Sound propagation modeling completed"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Quarry operations resume after winter",
            "decibel_range": "Variable based on operations"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak quarry and construction season",
            "decibel_range": "Maximum operational levels"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continued operations before winter",
            "decibel_range": "High operational levels"
        },
        "winter": {
            "activity_level": "Low",
            "details": "Reduced operations",
            "decibel_range": "Lower operational levels"
        }
    },
    "time_patterns": {
        "operating_hours": "Business hours only",
        "peak_activity": "Mid-morning to mid-afternoon",
        "restrictions": "Act 250 hearing requirements"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": ["Industrial noise exposure", "Highway traffic noise"],
        "mitigation_required": "Sound level compliance mandated"
    },
    "verified_sources": [
        {
            "title": "Ridge Road Quarry Noise & Traffic Studies",
            "url": "https://rsginc.com/project/ridge-road-quarry-noise-traffic-studies/",
            "type": "Professional Consulting Report",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "measures": "Designed mitigation to meet limits",
        "oversight": "Act 250 environmental review"
    }
};

// Vermont Interstate Highway Network Data
const highwayData = {
    "id": 5,
    "name": "Vermont Interstate Highway Network",
    "location": {
        "city": "Statewide",
        "county": "Multiple",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.2601,
            "longitude": -72.5806
        }
    },
    "noise_data": {
        "primary_source": "Highway traffic (I-89, I-91, Route 2, etc.)",
        "decibel_levels": {
            "passenger_cars_max": 80,
            "trucks_motorcycles_max": 82,
            "measurement_distance": "50 feet from vehicle",
            "measurement_type": "Vermont State limits",
            "highway_proximity_threshold": "10,000+ vehicles/day"
        },
        "affected_area": {
            "scope": "Buildings within 500 feet of major highways",
            "population": "Thousands of residents statewide"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Increasing tourism traffic",
            "decibel_range": "70-82"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak tourism and motorcycle traffic",
            "decibel_range": "75-82+"
        },
        "fall": {
            "activity_level": "Extreme",
            "details": "Leaf-peeper season traffic surge",
            "decibel_range": "75-85"
        },
        "winter": {
            "activity_level": "High",
            "details": "Ski traffic and studded tires",
            "decibel_range": "70-82"
        }
    },
    "time_patterns": {
        "peak_hours": "6-9 AM, 4-7 PM weekdays",
        "weekend_peaks": "Friday evenings, Sunday afternoons",
        "seasonal_peaks": "Foliage season and ski weekends"
    },
    "health_impact": {
        "risk_level": "Moderate to High",
        "effects": ["Sleep disruption near highways", "Cardiovascular impacts", "Hearing risk"],
        "building_requirements": "Soundproofing mandated within 500 feet"
    },
    "verified_sources": [
        {
            "title": "Noise Pollution Control in Vermont",
            "url": "https://www.stateregstoday.com/living/environmental-protection/noise-pollution-control-in-vermont",
            "type": "State Regulatory Documentation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Vermont Clean Air Act Requirements",
            "url": "https://www.stateregstoday.com/living/environmental-protection/noise-pollution-control-in-vermont",
            "type": "State Environmental Law",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "programs": ["Municipal Highway Soundproofing Program", "Noise Barrier Program"],
        "funding": "State and federal assistance available"
    }
};

// Vermont Forestry/Logging Operations Data
const forestryData = {
    "id": 6,
    "name": "Vermont Forestry/Logging Operations",
    "location": {
        "city": "Statewide Forest Areas",
        "county": "Multiple",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.1582,
            "longitude": -72.7317
        }
    },
    "noise_data": {
        "primary_source": "Chainsaw and logging equipment operations",
        "decibel_levels": {
            "chainsaw_range": "91-110",
            "cable_operations": 92,
            "average_exposure": "97-102",
            "measurement_type": "dBA occupational exposure",
            "sound_power_level": "115.7 dBA (chainsaw)"
        },
        "affected_area": {
            "scope": "Active logging sites statewide",
            "worker_exposure": "21% hearing loss rate in forestry workers"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Mud season limits access",
            "decibel_range": "91-110 during operations"
        },
        "summer": {
            "activity_level": "Low",
            "details": "Reduced activity during growing season",
            "decibel_range": "Minimal operations"
        },
        "fall": {
            "activity_level": "Very High",
            "details": "Peak logging season begins",
            "decibel_range": "91-110+ intensive operations"
        },
        "winter": {
            "activity_level": "High",
            "details": "Optimal logging conditions",
            "decibel_range": "91-110 regular operations"
        }
    },
    "time_patterns": {
        "operating_hours": "Daylight hours typically",
        "peak_activity": "Fall through early spring",
        "work_cycles": "1-2 minute cutting cycles"
    },
    "health_impact": {
        "risk_level": "Very High",
        "effects": ["Occupational hearing loss", "Wildlife habitat disruption", "Vibration exposure"],
        "worker_statistics": "Higher hearing loss than general industry (21% vs 19%)"
    },
    "verified_sources": [
        {
            "title": "Timber, Noise, and Hearing Loss: Forestry and Logging Industry",
            "url": "https://blogs.cdc.gov/niosh-science-blog/2018/05/24/noise-forestry/",
            "type": "CDC/NIOSH Research Study",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Incorporating acoustic objectives into Forest Management Planning",
            "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6526013/",
            "type": "Peer-reviewed Research",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Noise Exposure, Prevention, and Control in Agriculture and Forestry",
            "url": "https://www.mdpi.com/2313-576X/10/1/15",
            "type": "Academic Research Review",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": "Industry-based",
        "measures": ["Hearing protection requirements", "Equipment maintenance", "Anti-vibration tools"]
    }
};

// Killington Ski Resort Data
const killingtonData = {
    "id": 7,
    "name": "Killington Ski Resort - Snowmaking Operations",
    "location": {
        "city": "Killington",
        "county": "Rutland",
        "state": "Vermont",
        "coordinates": {
            "latitude": 43.6047,
            "longitude": -72.8092
        }
    },
    "noise_data": {
        "primary_source": "Snowmaking equipment and compressors",
        "decibel_levels": {
            "snowmaking_guns": "Variable by model",
            "compressor_systems": "High-efficiency rated equipment",
            "measurement_type": "Equipment specifications",
            "coverage": "71% of trails with snowmaking"
        },
        "affected_area": {
            "ski_area_size": "1,509 acres",
            "nearby_residences": "Killington Access Road area"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Low",
            "details": "End of season operations",
            "decibel_range": "Minimal snowmaking"
        },
        "summer": {
            "activity_level": "None",
            "details": "No snowmaking operations",
            "decibel_range": "Baseline ambient"
        },
        "fall": {
            "activity_level": "Moderate",
            "details": "Early season snowmaking begins",
            "decibel_range": "Initial operations"
        },
        "winter": {
            "activity_level": "Very High",
            "details": "24-hour snowmaking during cold periods",
            "decibel_range": "Peak operational levels"
        }
    },
    "time_patterns": {
        "peak_operations": "November through March",
        "daily_cycle": "24-hour operations when temperatures allow",
        "worst_periods": "Cold snap intensive snowmaking"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": ["Nighttime sleep disruption", "Continuous low-level exposure"],
        "affected_communities": "Nearby residential areas during ski season"
    },
    "verified_sources": [
        {
            "title": "Vermont Snowmaking Updates for Winter 2024-25",
            "url": "https://skivermont.com/snowmaking-grooming",
            "type": "Industry Documentation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Sustainability at Vermont Ski Areas",
            "url": "https://skivermont.com/sustainability",
            "type": "Industry Sustainability Report",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "measures": ["High-efficiency equipment upgrade", "Sound-reducing technology"],
        "investment": "$30M+ in equipment modernization"
    }
};

// Stowe General Noise Pollution Area Data
const stoweData = {
    "id": 8,
    "name": "Stowe General Noise Pollution Area",
    "location": {
        "city": "Stowe",
        "county": "Lamoille",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.4654,
            "longitude": -72.6874
        }
    },
    "noise_data": {
        "primary_source": "Tourism, traffic, and recreational activities",
        "decibel_levels": {
            "baseline": "Rural ambient levels",
            "peak_tourism": "Elevated above rural norms",
            "measurement_type": "Community observations",
            "regulatory_status": "No municipal noise ordinance"
        },
        "affected_area": {
            "tourist_corridor": "Mountain Road (Route 108)",
            "residential_areas": "Adjacent neighborhoods"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Spring tourism begins",
            "decibel_range": "Above baseline"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak summer recreation and tourism",
            "decibel_range": "Significantly elevated"
        },
        "fall": {
            "activity_level": "Extreme",
            "details": "Leaf-peeper season maximum impact",
            "decibel_range": "Highest levels"
        },
        "winter": {
            "activity_level": "High",
            "details": "Ski season traffic and snowmaking",
            "decibel_range": "Elevated winter levels"
        }
    },
    "time_patterns": {
        "pandemic_observation": "Quiet periods made existing noise more noticeable",
        "daily_peaks": "Tourist traffic patterns",
        "weekend_intensification": "Higher weekend tourism volumes"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": ["Quality of life impacts", "Tourism-related stress", "Lack of regulatory protection"],
        "community_response": "Calls for noise ordinance implementation"
    },
    "verified_sources": [
        {
            "title": "The Quietest Year film explores impacts of noise pollution",
            "url": "https://www.vermontpublic.org/show/made-here/2025-02-06/the-quietest-year-film-explores-the-impacts-of-noise-pollution-across-vermont",
            "type": "Documentary/Media Coverage",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Stowe: Lend an ear to noise pollution",
            "url": "https://www.vtcng.com/stowe_reporter/opinion/letters_to_the_editor/stowe-lend-an-ear-to-noise-pollution/article_cef581f4-a3a2-11eb-9904-cf4c30a40897.html",
            "type": "Community Opinion/Letter",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": false,
        "needed": "Basic noise ordinance protection",
        "advocacy": "Community calls for regulation"
    }
};

// Vermont Construction Sites Data
const constructionData = {
    "id": 9,
    "name": "Vermont Construction Sites (Statewide)",
    "location": {
        "city": "Statewide",
        "county": "Multiple",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.0759,
            "longitude": -72.6851
        }
    },
    "noise_data": {
        "primary_source": "Construction equipment and activities",
        "decibel_levels": {
            "jackhammers": "120-130",
            "pile_driving": "110-120",
            "bulldozers": "100-110",
            "cement_mixers": "85-90",
            "generators": "80-90",
            "measurement_type": "dB equipment ratings"
        },
        "affected_area": {
            "scope": "Active construction sites statewide",
            "proximity_impact": "Neighboring properties and communities"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Construction season begins",
            "decibel_range": "80-130 depending on equipment"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak construction season",
            "decibel_range": "80-130+ intensive projects"
        },
        "fall": {
            "activity_level": "High",
            "details": "Projects rush to completion",
            "decibel_range": "80-130 high activity"
        },
        "winter": {
            "activity_level": "Low",
            "details": "Weather-limited construction",
            "decibel_range": "Minimal construction noise"
        }
    },
    "time_patterns": {
        "permitted_hours": "Typically 7 AM - 7 PM weekdays",
        "weekend_restrictions": "Limited hours weekends/holidays",
        "permit_requirements": "Noise mitigation plans required"
    },
    "health_impact": {
        "risk_level": "High",
        "effects": ["Temporary hearing damage risk", "Sleep disruption", "Stress increase", "Property impacts"],
        "osha_limits": "90 dB average over 8-hour workday"
    },
    "verified_sources": [
        {
            "title": "Noise Ordinance in Vermont",
            "url": "https://www.stateregstoday.com/living/environmental-protection/noise-ordinance-in-vermont",
            "type": "State Regulatory Information",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Construction Noise: How to Protect Workers & Reduce Noise Pollution",
            "url": "https://www.procore.com/library/construction-noise",
            "type": "Industry Safety Guidelines",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "oversight": "Vermont Department of Environmental Conservation",
        "requirements": "Local permit compliance and noise mitigation"
    }
};

// Mad River Valley Recreational Area Data
const madRiverValleyData = {
    "id": 10,
    "name": "Mad River Valley Recreational Area",
    "location": {
        "city": "Warren",
        "county": "Washington",
        "state": "Vermont",
        "coordinates": {
            "latitude": 44.1167,
            "longitude": -72.8906
        }
    },
    "noise_data": {
        "primary_source": "Outdoor recreational activities, events, and tourism",
        "decibel_levels": {
            "minimum": 45,
            "maximum": 85,
            "average": 65,
            "measurement_type": "dBA",
            "measurement_distance": "Varied by activity location"
        },
        "affected_area": {
            "total_acres": 1800,
            "population_impacted": 3500,
            "housing_units_affected": 1200,
            "communities": ["Warren", "Waitsfield", "Fayston", "Moretown"],
            "description": "Valley corridor with concentrated recreational activities"
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Mountain biking, hiking, outdoor events starting",
            "decibel_range": "50-70"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak tourism, outdoor concerts, festivals",
            "decibel_range": "60-85"
        },
        "fall": {
            "activity_level": "High",
            "details": "Fall foliage tourism, harvest festivals",
            "decibel_range": "55-75"
        },
        "winter": {
            "activity_level": "High",
            "details": "Skiing, snowmobiling, winter recreation",
            "decibel_range": "50-80"
        }
    },
    "time_patterns": {
        "peak_hours": "9:00 AM - 9:00 PM",
        "operating_hours": "7:00 AM - 10:00 PM",
        "overnight_activity": "Limited to special events",
        "frequency": "Daily with heightened weekend activity",
        "restrictions": "Event curfews and noise ordinances after 10:00 PM"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": [
            "Intermittent noise disruption",
            "Weekend and holiday stress",
            "Seasonal sleep disturbance",
            "Impact on local wildlife"
        ],
        "vulnerable_populations": [
            "Year-round residents",
            "Wildlife in recreation areas",
            "Remote workers",
            "Elderly residents"
        ]
    },
    "verified_sources": [
        {
            "title": "Mad River Valley Planning District",
            "url": "https://mrvpd.org/",
            "type": "Local Planning Documentation",
            "date_accessed": "2025-08-31"
        },
        {
            "title": "Vermont Department of Tourism Reports",
            "url": "https://accd.vermont.gov/tourism",
            "type": "State Tourism Data",
            "date_accessed": "2025-08-31"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "Local and state tourism revenue",
        "measures": [
            "Event noise monitoring",
            "Time restrictions",
            "Buffer zones",
            "Community notification system"
        ],
        "annual_budget": "$250,000 (2025)"
    }
};

// Dollard-des-Ormeaux Station Data
const dollardStationData = {
    "id": 11,
    "name": "Dollard-des-Ormeaux Station",
    "location": {
        "city": "Dollard-des-Ormeaux",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4930,
            "longitude": -73.7969
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (Montreal-Trudeau)",
        "decibel_levels": {
            "minimum": 55,
            "maximum": 65,
            "average": 60,
            "measurement_type": "NEF (Noise Exposure Forecast)",
            "measurement_distance": "West of Highway 15"
        },
        "affected_area": {
            "zone": "West of Highway 15",
            "description": "Aircraft noise monitoring station in Dollard-des-Ormeaux",
            "communities": ["Dollard-des-Ormeaux", "West Island"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        },
        "summer": {
            "activity_level": "High",
            "details": "Peak air traffic season",
            "decibel_range": "55-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        },
        "winter": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        }
    },
    "time_patterns": {
        "peak_hours": "Data not publicly available",
        "operating_hours": "24/7",
        "frequency": "Continuous (NEF model)",
        "restrictions": "Based on NEF model guidelines"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": [
            "Sleep disruption potential",
            "Long-term exposure concerns",
            "Quality of life impact"
        ],
        "vulnerable_populations": [
            "Residential areas west of Highway 15",
            "Night shift workers",
            "Sensitive individuals"
        ]
    },
    "verified_sources": [
        {
            "title": "Les Pollués de Montréal-Trudeau",
            "url": "https://www.lpdmt.org/2015/03/11/airplane-noise-management-around-montreal-trudeau/?lang=en",
            "type": "Citizen Advocacy Documentation",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "ADM Soundscape Monitoring",
            "url": "https://www.admtl.com/en/adm/communities/soundscape",
            "type": "Official Airport Documentation",
            "date_accessed": "2025-09-01"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "ADM (Aéroports de Montréal)",
        "measures": [
            "Continuous noise monitoring",
            "NEF model implementation",
            "Community feedback system"
        ],
        "additional_info": "Equipment dates back to 2004 (as of 2014). Location questioned by citizen advocacy groups for limited coverage."
    }
};

// Dorval Station Data
const dorvalStationData = {
    "id": 12,
    "name": "Dorval Station (Airport Vicinity)",
    "location": {
        "city": "Dorval",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4656,
            "longitude": -73.7481
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (Montreal-Trudeau International Airport)",
        "decibel_levels": {
            "minimum": 55,
            "maximum": 65,
            "average": 63,
            "measurement_type": "dBA",
            "measurement_distance": "Within 5km radius of airport"
        },
        "affected_area": {
            "zone": "Residential areas within 5km radius",
            "description": "Aircraft noise monitoring station near Montreal-Trudeau International Airport",
            "communities": ["Dorval"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous monitoring with professional equipment",
            "decibel_range": "55-65"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak air traffic season",
            "decibel_range": "60-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Reduced operations possible due to weather",
            "decibel_range": "55-63"
        }
    },
    "time_patterns": {
        "peak_hours": "6:00-23:00",
        "operating_hours": "24/7",
        "frequency": "Continuous",
        "measurements": {
            "morning": 63,
            "afternoon": 65,
            "evening": 60,
            "night": 55
        }
    },
    "health_impact": {
        "risk_level": "High",
        "effects": [
            "Sleep disruption in residential areas",
            "Stress from continuous exposure",
            "Quality of life impact",
            "Subject of class action lawsuit"
        ],
        "vulnerable_populations": [
            "Residents within 5km radius",
            "Night shift workers",
            "Children and elderly"
        ]
    },
    "verified_sources": [
        {
            "title": "CBC News - Class Action Lawsuit Coverage",
            "url": "https://www.cbc.ca/news/canada/montreal/class-action-airplane-noise-1.4614458",
            "type": "News Report",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "ADM Soundscape Monitoring",
            "url": "https://www.admtl.com/en/adm/communities/soundscape",
            "type": "Official Airport Documentation",
            "date_accessed": "2025-09-01"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "ADM (Aéroports de Montréal)",
        "measures": [
            "Professional calibrated monitoring equipment",
            "NAV Canada flight tracking integration",
            "Complaint tracking system"
        ],
        "additional_info": "Part of official ADM noise monitoring network",
        "complaints": {
            "total": 245,
            "resolved": 198,
            "pending": 47
        }
    }
};

// Saint-Laurent Station Data
const saintLaurentStationData = {
    "id": 13,
    "name": "Saint-Laurent Official Station",
    "location": {
        "city": "Saint-Laurent",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.5088,
            "longitude": -73.6704
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (Montreal-Trudeau)",
        "decibel_levels": {
            "minimum": 55,
            "maximum": 65,
            "average": 60,
            "measurement_type": "NEF (Noise Exposure Forecast)",
            "measurement_distance": "Saint-Laurent borough area"
        },
        "affected_area": {
            "zone": "Saint-Laurent borough area",
            "description": "Official aircraft noise monitoring station in Saint-Laurent borough",
            "communities": ["Saint-Laurent"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous NEF model monitoring",
            "decibel_range": "55-65"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak air traffic season",
            "decibel_range": "58-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Weather-dependent operations",
            "decibel_range": "55-63"
        }
    },
    "time_patterns": {
        "peak_hours": "Data not publicly available",
        "operating_hours": "24/7",
        "frequency": "Continuous (NEF model)",
        "restrictions": "Based on NEF model guidelines"
    },
    "health_impact": {
        "risk_level": "Moderate to High",
        "effects": [
            "Residential noise exposure",
            "Sleep disturbance potential",
            "Community concerns"
        ],
        "vulnerable_populations": [
            "Borough residents",
            "Schools and institutions",
            "Night shift workers"
        ]
    },
    "verified_sources": [
        {
            "title": "Les Pollués de Montréal-Trudeau",
            "url": "https://www.lpdmt.org/2015/03/11/airplane-noise-management-around-montreal-trudeau/?lang=en",
            "type": "Community Organization",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "ADM Soundscape Monitoring",
            "url": "https://www.admtl.com/en/adm/communities/soundscape",
            "type": "Official Airport Documentation",
            "date_accessed": "2025-09-01"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "ADM (Aéroports de Montréal)",
        "measures": [
            "NEF model monitoring",
            "Equipment maintenance",
            "Data collection for noise exposure forecasting"
        ],
        "additional_info": "Equipment dates back to 2004 (as of 2014). Used for NEF model calculations."
    }
};

// Côte-Saint-Luc Station Data
const coteSaintLucStationData = {
    "id": 14,
    "name": "Côte-Saint-Luc Station",
    "location": {
        "city": "Côte-Saint-Luc",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4658,
            "longitude": -73.6667
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (Montreal-Trudeau)",
        "decibel_levels": {
            "minimum": 55,
            "maximum": 65,
            "average": 60,
            "measurement_type": "NEF (Noise Exposure Forecast)",
            "measurement_distance": "Côte-Saint-Luc area"
        },
        "affected_area": {
            "zone": "Côte-Saint-Luc area",
            "description": "Aircraft noise monitoring station in Côte-Saint-Luc",
            "communities": ["Côte-Saint-Luc"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous NEF model monitoring",
            "decibel_range": "55-65"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak air traffic season",
            "decibel_range": "58-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Weather-dependent operations",
            "decibel_range": "55-63"
        }
    },
    "time_patterns": {
        "peak_hours": "Data not publicly available",
        "operating_hours": "24/7",
        "frequency": "Continuous (NEF model)",
        "restrictions": "Based on NEF model guidelines"
    },
    "health_impact": {
        "risk_level": "Moderate to High",
        "effects": [
            "Residential noise exposure",
            "Sleep disturbance potential",
            "Community concerns"
        ],
        "vulnerable_populations": [
            "Residential areas",
            "Schools and institutions",
            "Night shift workers"
        ]
    },
    "verified_sources": [
        {
            "title": "Les Pollués de Montréal-Trudeau",
            "url": "https://www.lpdmt.org/2015/03/11/airplane-noise-management-around-montreal-trudeau/?lang=en",
            "type": "Community Organization",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "ADM Soundscape Monitoring",
            "url": "https://www.admtl.com/en/adm/communities/soundscape",
            "type": "Official Airport Documentation",
            "date_accessed": "2025-09-01"
        }
    ],
    "mitigation_programs": {
        "active": true,
        "funding": "ADM (Aéroports de Montréal)",
        "measures": [
            "NEF model monitoring",
            "Equipment maintenance",
            "Data collection for noise exposure forecasting"
        ],
        "additional_info": "Part of ADM's official monitoring network. Equipment dates back to 2004 (as of 2014). Contributes to NEF model data."
    }
};

// Saint-Sulpice Station Data
const saintSulpiceStationData = {
    "id": 15,
    "name": "Saint-Sulpice Station",
    "location": {
        "city": "Montreal",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.5398,
            "longitude": -73.6293
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations",
        "decibel_levels": {
            "minimum": 55,
            "maximum": 75,
            "average": 70,
            "measurement_type": "Citizen monitoring",
            "measurement_distance": "1.5km from Centre Claude-Robillard"
        },
        "affected_area": {
            "description": "Citizen monitoring station with outdoor-mounted microphones",
            "zone": "1.5 km from Centre Claude-Robillard station",
            "communities": ["Saint-Sulpice", "Ahuntsic-Cartierville"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous citizen monitoring",
            "decibel_range": "55-75"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "653 flights exceeded 55dB in July",
            "decibel_range": "55-75"
        },
        "fall": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-75"
        },
        "winter": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "55-75"
        }
    },
    "time_patterns": {
        "peak_hours": "Night flights (653 exceeded 55dB in July)",
        "operating_hours": "24/7",
        "frequency": "Continuous"
    },
    "health_impact": {
        "risk_level": "High",
        "effects": [
            "Sleep disruption",
            "Night noise exposure",
            "Community disturbance"
        ],
        "vulnerable_populations": [
            "Residents near flight paths",
            "Night shift workers",
            "Children and elderly"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "Community initiatives",
        "measures": [
            "Citizen noise monitoring",
            "Public reporting",
            "Community advocacy"
        ]
    },
    "verified_sources": [
        {
            "title": "CBC News - Airport Noise Report",
            "url": "https://www.cbc.ca/news/canada/montreal/trudeau-airport-noise-regularly-exceeds-annoyance-levels-according-to-group-1.3196409",
            "type": "News Report",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "Aeroplainte Monitoring",
            "url": "https://aeroplainte.ca/",
            "type": "Citizen Monitoring Network",
            "date_accessed": "2025-09-01"
        }
    ]
};

// Montreal-Trudeau Airport Terminal Data
const trudeauAirportData = {
    "id": 16,
    "name": "Montreal-Trudeau International Airport",
    "location": {
        "city": "Dorval",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4656,
            "longitude": -73.7481
        }
    },
    "noise_data": {
        "primary_source": "Aircraft operations (Main airport terminal)",
        "decibel_levels": {
            "minimum": 70,
            "maximum": 95,
            "average": 85,
            "measurement_type": "Airport Operations",
            "measurement_distance": "20 km radius impact zone"
        },
        "affected_area": {
            "description": "Main airport terminal and operations hub",
            "zone": "20 km radius from Downtown Montreal",
            "communities": ["Dorval", "Saint-Laurent", "Lachine", "Pointe-Claire"],
            "total_acres": 15000,
            "population_impacted": 250000,
            "housing_units_affected": 85000
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Very High",
            "details": "Regular commercial and cargo operations",
            "decibel_range": "70-95"
        },
        "summer": {
            "activity_level": "Peak",
            "details": "Maximum flight operations",
            "decibel_range": "75-95"
        },
        "fall": {
            "activity_level": "Very High",
            "details": "Regular commercial and cargo operations",
            "decibel_range": "70-95"
        },
        "winter": {
            "activity_level": "High",
            "details": "Weather-dependent operations",
            "decibel_range": "70-90"
        }
    },
    "time_patterns": {
        "peak_hours": "Variable based on flight schedule",
        "operating_hours": "24/7",
        "frequency": "234,840 planes annually (2017)"
    },
    "health_impact": {
        "risk_level": "Very High",
        "effects": [
            "Significant noise exposure",
            "Sleep disruption",
            "Stress and cardiovascular impacts",
            "Property value effects"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "ADM (Aéroports de Montréal)",
        "measures": [
            "Noise monitoring network",
            "Flight path optimization",
            "Community engagement",
            "Sound insulation programs"
        ]
    },
    "verified_sources": [
        {
            "title": "Montreal-Trudeau Airport Wikipedia",
            "url": "https://en.wikipedia.org/wiki/Montréal–Trudeau_International_Airport",
            "type": "Reference",
            "date_accessed": "2025-09-01"
        },
        {
            "title": "ADM Soundscape",
            "url": "https://www.admtl.com/en/adm/communities/soundscape",
            "type": "Official Documentation",
            "date_accessed": "2025-09-01"
        }
    ],
    "additional_info": "234,840 planes annually (2017). Planned expansion to 380,435 aircraft."
};

// McGill Downtown Campus Study Data
const mcgillCampusData = {
    "id": 17,
    "name": "McGill Downtown Campus Study",
    "location": {
        "city": "Montreal",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.5048,
            "longitude": -73.5772
        }
    },
    "noise_data": {
        "primary_source": "Urban Environmental Noise",
        "decibel_levels": {
            "minimum": 62,
            "maximum": 67,
            "average": 65,
            "measurement_type": "Academic Research Study",
            "measurement_distance": "Campus-wide measurements"
        },
        "affected_area": {
            "description": "Multi-neighborhood comparative study showing socioeconomic disparities in noise exposure",
            "zone": "Downtown Montreal campus area",
            "communities": ["Downtown Montreal", "McGill Campus"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Academic session",
            "decibel_range": "62-67"
        },
        "summer": {
            "activity_level": "Moderate",
            "details": "Reduced campus activity",
            "decibel_range": "60-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Peak academic session",
            "decibel_range": "62-67"
        },
        "winter": {
            "activity_level": "High",
            "details": "Academic session",
            "decibel_range": "62-67"
        }
    },
    "time_patterns": {
        "operating_hours": "Daytime",
        "frequency": "5-day monitoring study"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": [
            "Academic environment impact",
            "Urban noise exposure",
            "Socioeconomic disparities in exposure"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "Academic research grants",
        "measures": [
            "Environmental health research",
            "Urban noise monitoring",
            "Policy recommendations"
        ]
    },
    "verified_sources": [
        {
            "title": "McGill University Environmental Health Study",
            "url": "https://www.mcgill.ca/epi-biostat-occh/article/mscph-public-health-day-2023-environmental-health/environmental-noise-pollution-levels-among-neighborhoods-montreal-canada",
            "type": "Academic Research",
            "date_accessed": "2025-09-01"
        }
    ],
    "additional_info": "Higher noise levels in socioeconomically disadvantaged areas"
};

// Marshall Radar Observatory Data
const marshallObservatoryData = {
    "id": 18,
    "name": "J.S. Marshall Radar Observatory",
    "location": {
        "city": "Sainte-Anne-de-Bellevue",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4241,
            "longitude": -73.9374
        }
    },
    "noise_data": {
        "primary_source": "Environmental and radar operations",
        "decibel_levels": {
            "minimum": 50,
            "maximum": 60,
            "average": 55,
            "measurement_type": "Environmental Monitoring",
            "measurement_distance": "50m above sea level"
        },
        "affected_area": {
            "description": "Environmental monitoring facility with historical weather radar operations",
            "zone": "Facility grounds and immediate surroundings",
            "communities": ["Sainte-Anne-de-Bellevue"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Environmental monitoring",
            "decibel_range": "50-60"
        },
        "summer": {
            "activity_level": "Moderate",
            "details": "Regular operations",
            "decibel_range": "50-60"
        },
        "fall": {
            "activity_level": "Moderate",
            "details": "Environmental monitoring",
            "decibel_range": "50-60"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Weather monitoring",
            "decibel_range": "50-60"
        }
    },
    "time_patterns": {
        "operating_hours": "24/7",
        "frequency": "Continuous monitoring"
    },
    "health_impact": {
        "risk_level": "Low",
        "effects": [
            "Minimal environmental impact",
            "Research facility operations"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "McGill University",
        "measures": [
            "Environmental monitoring",
            "Equipment maintenance",
            "Noise reduction protocols"
        ]
    },
    "verified_sources": [
        {
            "title": "J.S. Marshall Radar Observatory",
            "url": "https://en.wikipedia.org/wiki/J._S._Marshall_Radar_Observatory",
            "type": "Reference",
            "date_accessed": "2025-09-01"
        }
    ]
};

// ETS Campus Study Data
const etsCampusData = {
    "id": 19,
    "name": "ETS Campus Acoustic Study",
    "location": {
        "city": "Montreal",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4944,
            "longitude": -73.5620
        }
    },
    "noise_data": {
        "primary_source": "Urban campus environment",
        "decibel_levels": {
            "minimum": 60,
            "maximum": 70,
            "average": 65,
            "measurement_type": "Academic Study",
            "measurement_distance": "Campus-wide"
        },
        "affected_area": {
            "description": "Campus acoustic environment study by GRAM Acoustics Research Group",
            "zone": "Campus and surrounding area",
            "communities": ["Downtown Montreal", "ETS Campus"]
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Academic session",
            "decibel_range": "60-70"
        },
        "summer": {
            "activity_level": "Moderate",
            "details": "Reduced activity",
            "decibel_range": "55-65"
        },
        "fall": {
            "activity_level": "High",
            "details": "Peak hours study period",
            "decibel_range": "60-70"
        },
        "winter": {
            "activity_level": "High",
            "details": "Academic session",
            "decibel_range": "60-70"
        }
    },
    "time_patterns": {
        "peak_hours": "4:00-5:00 p.m.",
        "frequency": "Peak vs off-peak comparison"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": [
            "Academic environment impact",
            "Urban noise exposure",
            "Peak hour stress"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "ETS Montreal",
        "measures": [
            "Student research projects",
            "Acoustic monitoring",
            "Urban planning studies"
        ]
    },
    "verified_sources": [
        {
            "title": "ETS Montreal Study",
            "url": "https://www.etsmtl.ca/en/news/mapping-noise-at-ets-a-mec636-student-project",
            "type": "Academic Research",
            "date_accessed": "2025-09-01"
        }
    ]
};

// Hochelaga-Maisonneuve District Data
const hochelagaData = {
    "id": 20,
    "name": "Hochelaga-Maisonneuve District",
    "location": {
        "city": "Montreal",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.5477,
            "longitude": -73.5418
        }
    },
    "noise_data": {
        "primary_source": "Urban environmental noise",
        "decibel_levels": {
            "minimum": 60,
            "maximum": 70,
            "average": 65.1,
            "measurement_type": "Socioeconomic Study",
            "measurement_distance": "District-wide"
        },
        "affected_area": {
            "description": "Low-income neighborhood study site",
            "zone": "Hochelaga-Maisonneuve district",
            "communities": ["Hochelaga-Maisonneuve"],
            "population_impacted": 131000
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Urban activity",
            "decibel_range": "60-70"
        },
        "summer": {
            "activity_level": "Very High",
            "details": "Peak outdoor activity",
            "decibel_range": "65-75"
        },
        "fall": {
            "activity_level": "High",
            "details": "Urban activity",
            "decibel_range": "60-70"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Reduced outdoor activity",
            "decibel_range": "55-65"
        }
    },
    "time_patterns": {
        "operating_hours": "Daytime",
        "frequency": "5-day monitoring period"
    },
    "health_impact": {
        "risk_level": "High",
        "effects": [
            "Socioeconomic disparity impact",
            "Higher noise exposure",
            "Environmental justice concerns"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "Municipal programs",
        "measures": [
            "Environmental monitoring",
            "Community advocacy",
            "Urban planning initiatives"
        ]
    },
    "verified_sources": [
        {
            "title": "McGill Environmental Health Study",
            "url": "https://www.mcgill.ca/epi-biostat-occh/",
            "type": "Academic Research",
            "date_accessed": "2025-09-01"
        }
    ],
    "additional_info": "Mean = 65.1 dB; SD = 7.50; Median = 64.3 dB"
};

// Westmount District Data
const westmountData = {
    "id": 21,
    "name": "Westmount District",
    "location": {
        "city": "Westmount",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.4835,
            "longitude": -73.5965
        }
    },
    "noise_data": {
        "primary_source": "Urban environmental noise",
        "decibel_levels": {
            "minimum": 58,
            "maximum": 66,
            "average": 62.0,
            "measurement_type": "Socioeconomic Study",
            "measurement_distance": "District-wide"
        },
        "affected_area": {
            "description": "High-income neighborhood study site",
            "zone": "Westmount district",
            "communities": ["Westmount"],
            "population_impacted": 20000
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "Moderate",
            "details": "Residential area",
            "decibel_range": "55-65"
        },
        "summer": {
            "activity_level": "Moderate",
            "details": "Controlled urban activity",
            "decibel_range": "55-65"
        },
        "fall": {
            "activity_level": "Moderate",
            "details": "Residential patterns",
            "decibel_range": "55-65"
        },
        "winter": {
            "activity_level": "Low",
            "details": "Reduced activity",
            "decibel_range": "50-60"
        }
    },
    "time_patterns": {
        "operating_hours": "Daytime",
        "frequency": "5-day study period"
    },
    "health_impact": {
        "risk_level": "Low to Moderate",
        "effects": [
            "Lower noise exposure",
            "Better urban planning",
            "Protected residential areas"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "Municipal budget",
        "measures": [
            "Urban planning controls",
            "Noise bylaws",
            "Green space preservation"
        ]
    },
    "verified_sources": [
        {
            "title": "McGill Environmental Health Study",
            "url": "https://www.mcgill.ca/epi-biostat-occh/",
            "type": "Academic Research",
            "date_accessed": "2025-09-01"
        }
    ],
    "additional_info": "Mean = 62.0 dB; SD = 6.87; Median = 60.8 dB"
};

// RSQA East Montreal Station Data
const rsqaEastData = {
    "id": 22,
    "name": "RSQA Station - East Montreal",
    "location": {
        "city": "Montreal",
        "county": "Montreal",
        "state": "Quebec",
        "coordinates": {
            "latitude": 45.5570,
            "longitude": -73.5435
        }
    },
    "noise_data": {
        "primary_source": "Urban environmental and air quality monitoring",
        "decibel_levels": {
            "minimum": 58,
            "maximum": 68,
            "average": 63,
            "measurement_type": "Government Monitoring",
            "measurement_distance": "East Montreal sector"
        },
        "affected_area": {
            "description": "Government air quality monitoring station with acoustic sensors",
            "zone": "East Montreal sector",
            "communities": ["East Montreal"],
            "population_impacted": 75000
        }
    },
    "seasonal_variations": {
        "spring": {
            "activity_level": "High",
            "details": "Continuous monitoring",
            "decibel_range": "58-68"
        },
        "summer": {
            "activity_level": "High",
            "details": "Peak urban activity",
            "decibel_range": "60-70"
        },
        "fall": {
            "activity_level": "High",
            "details": "Regular monitoring",
            "decibel_range": "58-68"
        },
        "winter": {
            "activity_level": "Moderate",
            "details": "Continuous monitoring",
            "decibel_range": "55-65"
        }
    },
    "time_patterns": {
        "operating_hours": "24/7",
        "frequency": "Hourly updates"
    },
    "health_impact": {
        "risk_level": "Moderate",
        "effects": [
            "Urban environmental exposure",
            "Air quality correlation",
            "Combined environmental impacts"
        ]
    },
    "mitigation_programs": {
        "active": true,
        "funding": "Government monitoring program",
        "measures": [
            "24/7 environmental monitoring",
            "Real-time data collection",
            "Public health reporting"
        ]
    },
    "verified_sources": [
        {
            "title": "Montreal RSQA Network",
            "url": "https://montreal.ca/en/articles/monitoring-air-quality-montreal-8820",
            "type": "Government Data",
            "date_accessed": "2025-09-01"
        }
    ],
    "additional_info": "Part of 11 permanent sampling stations network"
};

const heatmapData = [
    [airportData.location.coordinates.latitude, airportData.location.coordinates.longitude, 1.0],    // Burlington International Airport
    [winooskiData.location.coordinates.latitude, winooskiData.location.coordinates.longitude, 0.9],  // Winooski Aircraft Impact Zone
    [benningtonData.location.coordinates.latitude, benningtonData.location.coordinates.longitude, 0.8], // Bennington Downtown Traffic Corridor
    [randolphData.location.coordinates.latitude, randolphData.location.coordinates.longitude, 0.7],  // Randolph Ridge Road Quarry
    [highwayData.location.coordinates.latitude, highwayData.location.coordinates.longitude, 0.85],   // Vermont Interstate Highway Network
    [forestryData.location.coordinates.latitude, forestryData.location.coordinates.longitude, 0.95], // Vermont Forestry/Logging Operations
    [stoweData.location.coordinates.latitude, stoweData.location.coordinates.longitude, 0.75],      // Stowe General Noise Pollution Area
    [killingtonData.location.coordinates.latitude, killingtonData.location.coordinates.longitude, 0.8], // Killington Ski Resort Snowmaking
    [constructionData.location.coordinates.latitude, constructionData.location.coordinates.longitude, 0.9], // Vermont Construction Sites
    [madRiverValleyData.location.coordinates.latitude, madRiverValleyData.location.coordinates.longitude, 0.85], // Mad River Valley Recreational Area
    [dollardStationData.location.coordinates.latitude, dollardStationData.location.coordinates.longitude, 0.75], // Dollard-des-Ormeaux Station
    [dorvalStationData.location.coordinates.latitude, dorvalStationData.location.coordinates.longitude, 0.8], // Dorval Station
    [saintLaurentStationData.location.coordinates.latitude, saintLaurentStationData.location.coordinates.longitude, 0.75], // Saint-Laurent Station
    [coteSaintLucStationData.location.coordinates.latitude, coteSaintLucStationData.location.coordinates.longitude, 0.75], // Côte-Saint-Luc Station
    [saintSulpiceStationData.location.coordinates.latitude, saintSulpiceStationData.location.coordinates.longitude, 0.85],
    [trudeauAirportData.location.coordinates.latitude, trudeauAirportData.location.coordinates.longitude, 1.0],
    [mcgillCampusData.location.coordinates.latitude, mcgillCampusData.location.coordinates.longitude, 0.8],
    [marshallObservatoryData.location.coordinates.latitude, marshallObservatoryData.location.coordinates.longitude, 0.6],
    [etsCampusData.location.coordinates.latitude, etsCampusData.location.coordinates.longitude, 0.8],
    [hochelagaData.location.coordinates.latitude, hochelagaData.location.coordinates.longitude, 0.8],
    [westmountData.location.coordinates.latitude, westmountData.location.coordinates.longitude, 0.75],
    [rsqaEastData.location.coordinates.latitude, rsqaEastData.location.coordinates.longitude, 0.75]
];

// Add to heatmap data
const montrealLocations = [
    {lat: 45.5398, lng: -73.6293, value: 0.7}, // Saint-Sulpice Station
    {lat: 45.4656, lng: -73.7481, value: 0.85}, // Trudeau Airport
    {lat: 45.5048, lng: -73.5772, value: 0.65}, // McGill Campus
    {lat: 45.4241, lng: -73.9374, value: 0.55}, // Marshall Observatory
    {lat: 45.4944, lng: -73.5620, value: 0.65}, // ETS Campus
    {lat: 45.5477, lng: -73.5418, value: 0.651}, // Hochelaga
    {lat: 45.4835, lng: -73.5965, value: 0.62}, // Westmount
    {lat: 45.5570, lng: -73.5435, value: 0.63}  // RSQA East
];

// Extend existing heatmapData array
heatmapData.push(...montrealLocations);