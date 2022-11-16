var config = {
    style: 'mapbox://styles/heyhaiden/cl9o9prbp000g14o8unsvc3sa',
    accessToken: 'pk.eyJ1IjoiaGV5aGFpZGVuIiwiYSI6ImNsOWd5d2kzYTJjNm0zd3F0Y3JpYjBzbHkifQ.n54i9juDJo3yjB5iFuHohA',
    showMarkers: false,
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: '   ',
    subtitle: 'Visualizing the effects of lockdown policy on PM₂.₅ air quality measurements',
    byline: 'Los Angeles and London, January - June 2020',
    footer: 'Source: <a href="https://aqicn.org/data-platform/covid19/" target="_blank">COVID-19 Worldwide Air Quality Data Project</a>, <a href="https://github.com/codeforgermany/click_that_hood" target="_blank">Click That Hood</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'blank-chapter',
            alignment: 'center',
            hidden: true,
            title: 'xxx?',
            //image: './img/LockdownIntro.webp',
            description: 'xxx',
            location: {
                center: [-100.08256, 39.07762],
                zoom: 4.5,
                pitch: 13.53,
                bearing: 0.00,
                speed: 0.2,
                curve: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'research-intro',
            alignment: 'center',
            hidden: false,
            title: 'How quickly does air quality improve when the world shuts down?',
            image: 'img/pm25chart.png',
            description: '<br>The aim of this website is to investigate whether there is any visual or statistical correlation between changes in fine particulate matter (PM25) measurements between London and Los Angeles leading up to and during the beginning of the Coronavirus pandemic in March of 2020. Due to lockdown measures, would a car-centric city have seen a more drastic improvement in its air quality than a non-car-centric city?<br><br> In order to test this, two cities were chosen that have similarities in total population, population density, and total square footage, but major differences in transportation modalities.<br><br>Image: WHO',
            
            location: {
                center: [-100.08256, 39.07762],
                zoom: 4.5,
                pitch: 13.53,
                bearing: 0.00,
                speed: 0.2,
                curve: 2
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
                {


                }
            ],
            onChapterExit: [
                {

                }
            ]
        },

        {
            id: 'la-hidden-1',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles, California',
            //image: '/img/losangeles_chapter1.webp',
            description: 'xxx',
            location: {
                center: [-118.32409, 34.03083],
                zoom: 7.5,
                pitch: 45.00,
                bearing: 0.00,
                speed: 2
            },
            mapAnimation: 'easeTo',
            //rotateAnimation: false,
            //callback: '',
            onChapterEnter: [
                {
                    layer:'los-angeles-perimeter',
                    opacity: 1,
                    duration: 2500
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },

        {
            id: 'la-intro-2',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County, California',
            image: './img/losangeles_chapter1.webp',
            description: '<br>"Los Angeles is a city notorious for its smog, a combination of particle and ozone pollution. The prevalence of these pollutants result from many factors, including the burning of fossil fuels, especially by vehicles, ships, planes and manufacturing, as well as wildfires.<br><br>The large population of 3.9 million in Los Angeles, with another 6 million in the surrounding Los Angeles county, contributes significantly to the its ‘nonattainment’ air quality status because of heavy vehicular emissions and traffic congestion. It is estimated that there are 6.5 million vehicles in the city of Los Angeles alone." <br><br>Source: <a href="https://www.iqair.com/newsroom/air-quality/report-impact-of-covid-19-on-global-air-quality-earth-day" target="_blank">COVID-19 impact on air quality in 10 major cities</a><br>Photo: Shutterstock',
            
            location: {
                center: [-118.32560, 33.90192],
                zoom: 10.35,
                pitch: 45.00,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {

                }
            ]
        },

        {
            id: 'la-hidden-3',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles, California',
            //image: '/img/losangeles_chapter1.webp',
            description: 'xxx',
            location: {
                center: [-118.32560, 33.90192],
                zoom: 10.35,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer-name',
                    opacity: 0
                }
            ]
        },

        {
            id: 'la-intro-4',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County, California',
            image: './img/pmLevelsLA.PNG',
            description: '<br>"Data collected by EPA governmental monitors and analyzed in the <a href="https://www.iqair.com/blog/air-quality/report-impact-of-covid-19-on-global-air-quality-earth-day" target="_blank">COVID-19 Air Quality Report</a> found that Los Angeles experienced a long stretch of WHO-target air quality (< 10 μg/m3) from March 7-28, 2020, its longest streak since at least 1995. <br><br>This 18-day stretch of exceptionally clean air is likely the result of lockdown measures put in place to reduce the spread of the COVID-19 pandemic, during which non-essential businesses were ordered to close and residents were urged to stay at home. March 2020 became Los Angeles’s cleanest air quality month on record, averaging PM2.5 levels of 5.6 μg/m3."<br><br>Source: <a href="https://www.iqair.com/usa/california/los-angeles" target="_blank">www.iqair.com/usa/california/los-angeles</a><br>Photo: <a href="https://cms.iqair.com/sites/default/files/documents/REPORT-COVID-19-Impact-on-Air-Quality-in-10-Major-Cities_V6.pdf" target="_blank">IQ Air</a>',
            location: {
                center: [-118.32560, 33.90192],
                zoom: 10.35,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   
                }
            ],
            onChapterExit: [
                {
                  
                }
            ]
        },

        {
            id: 'la-hidden-4',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County, California',
            image: './img/LAduringLockdown.PNG',
            description: '<br>"During Los Angeles’s defined 3-week lockdown period, PM2.5 concentration levels are down by 31% from the same time last year, and down 51% from the average of the prior 4 years."<br>Source: <a href="https://cms.iqair.com/sites/default/files/documents/REPORT-COVID-19-Impact-on-Air-Quality-in-10-Major-Cities_V6.pdf" target="_blank">COVID-19 AIR QUALITY REPORT</a><br>Photo: <a href="https://cms.iqair.com/sites/default/files/documents/REPORT-COVID-19-Impact-on-Air-Quality-in-10-Major-Cities_V6.pdf" target="_blank">IQ Air</a>',
            location: {
                center: [-118.32560, 33.90192],
                zoom: 10.35,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    layer:'los-angeles-perimeter',
                    opacity: 0,
                    duration: 1500
                }
            ]
        },

        {
            id: 'london-intro-1',
            alignment: 'right',
            hidden: false,
            title: 'London, United Kingdom',
            image: './img/london_chapter1.webp',
            description: '<br>"In October 2017, London was the first world megacity to sign up to the World Health Organization’s (WHO) “Breathe Life” campaign. The campaign asks cities to commit to meeting the WHO recommended guideline limit for PM2.5 by 2030. <br><br>The average PM2.5 concentration in London was 13.3 µg m-3 and there were no areas in London within the WHO guideline limit. Areas within the city limit had concentrations of PM2.5 between 10 – 12 µg m-3."<br><br>Source <a href="https://www.london.gov.uk/sites/default/files/pm2.5_in_london_october19.pdf" target="_blank">PM2.5 in London:Roadmap to meeting World Health Organization guidelines by 2030</a>',
            location: {
                center: [-0.10249, 51.47460],
                zoom: 10.11,
                pitch: 45.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'london-perimeter',
                    opacity: 1,
                    duration: 1500
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },

        {
            id: 'london-intro-1',
            alignment: 'right',
            hidden: false,
            title: 'London, United Kingdom',
            image: './img/LockdownIntro.webp',
            description: '<br>However, lockdown measures also seemingly had a sudden effect on those levels. <br><br>"The UK followed on March 23 when Prime Minister Boris Johnson announced a lockdown prohibiting non-essential trips, aside from shopping, dealing with health issues, commuting where necessary and exercise. People were instructed to work from home wherever possible. In most European countries, social distancing had been mandated, and large numbers of businesses closed."<br><br>Source: <a href="https://cms.iqair.com/sites/default/files/documents/REPORT-COVID-19-Impact-on-Air-Quality-in-10-Major-Cities_V6.pdf" target="_blank">COVID-19 AIR QUALITY REPORT</a><br>Photo: IQ AIR',
            location: {
                center: [-0.01805, 51.53370],
                zoom: 10.49,
                pitch: 45.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: []
        },
        {
            id: 'london-intro-2',
            alignment: 'right',
            hidden: false,
            title: 'London, United Kingdom',
            image: './img/LondonBarGraph.png',
            description: '<br>"London experienced reductions in PM2.5 of 9% during their lockdown periods compared to 2019. Contributing factors are likely to include a significant reduction in traffic and power generation (xxx).<br><br> Comparing London’s PM2.5 levels during the 2020 lockdowns to the average of the prior 4 years doesn’t show such a clear downward trend as in comparison to last year alone. Weather conditions and geographical location can greatly influence measured air quality, even after emissions fall. More data quantifying the changing levels of PM2.5 as these cities’ lockdown periods continue will be beneficial to gain a more thorough comparison with previous years." <br><br>Source: <a href="https://cms.iqair.com/sites/default/files/documents/REPORT-COVID-19-Impact-on-Air-Quality-in-10-Major-Cities_V6.pdf" target="_blank">COVID-19 AIR QUALITY REPORT</a>,<br><a href="https://www.telegraph.co.uk/politics/0/lockdown-government-guidance-uk-coronavirus/" target="_blank">The Government 50-page roadmap out of lockdown, explained</a><br>Photo: IQ AIR',
            location: {
                center: [-0.12707, 51.51506],
                zoom: 13.01,
                pitch: 57.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'london-perimeter',
                    opacity: 0.3,
                    duration: 2500
                }
            ],
            onChapterExit: []
        },

        {
            id: 'london-intro-3',
            alignment: 'right',
            hidden: true,
            title: 'London, United Kingom',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-0.12707, 51.51506],
                zoom: 13.01,
                pitch: 57.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'london-intro-4',
            alignment: 'right',
            hidden: false,
            title: 'London, United Kingdom',
            image: '',
            description: 'xxx',
            location: {
                center: [-0.12707, 51.51506],
                zoom: 13.01,
                pitch: 57.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'conclusion-hidden',
            alignment: 'center',
            hidden: true,
            title: 'Explore the Dashboard',
            image: '',
            description: 'We belive that changing the way we display the the story of pm 2.5 will create a change in Londoners preciptions and lead to change policy .',
            location: {
                center: [-44.30249, 40.09260],
                zoom: 2.48,
                pitch: 23.50,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'london-perimeter',
                    opacity: 0,
                    duration: 2500
                }
            ],
            onChapterExit: []
        },

        {
            id: 'conclusion-visible',
            alignment: 'right',
            hidden: false,
            title: 'Want to explore more?',
            image: '',
            description: 'Visit the dashboard <a href="dashboard.html" target="_blank">here</a>.',
            location: {
                center: [-44.30249, 40.09260],
                zoom: 2.48,
                pitch: 23.50,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
