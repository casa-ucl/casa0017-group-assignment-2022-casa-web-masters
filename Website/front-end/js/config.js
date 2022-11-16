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
            image: '',
            description: ' The aim of our website is to investigate whether there is any visual or statistical correlation between changes in AQI measurements between London and Los Angeles leading up to and during the beginning of the Coronavirus pandemic in March of 2020. Due to lockdown measures, >>>>> . When it comes to tackling air pollution and the climate emergency I’m clear that cities like London and Los Angeles have a responsibility to act" (he Mayor of London and Chair of C40 Cities, Sadiq Khan,)>>>>>>>>>>>> would a car-centric city have seen a more drastic improvement in its air quality than a non-car-centric city? >>>>>> In order to test this, two cities were chosen that have similarities among total Car owners , But diffrent population density, and total population >>>>>>>>> . About why we are creating the web side - is that for policy makers, and companies that want to create a thier local standart of air quality. With our AQI index our consumers are more aware to the health causes of PM 2.5 and can act to make a local change for there citizens and employers health.',
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
            id: 'la-hidden',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles, California',
            //image: '/img/losangeles_chapter1.webp',
            description: '',
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
            description: '<br>"Los Angeles is a city notorious for its smog, a combination of particle and ozone pollution. The prevalence of these pollutants result from many factors, including the burning of fossil fuels, especially by vehicles, ships, planes and manufacturing, as well as wildfires.<br><br>The large population of 3.9 million in Los Angeles, with another 6 million in the surrounding Los Angeles county, contributes significantly to the its ‘nonattainment’ air quality status because of heavy vehicular emissions and traffic congestion. It is estimated that there are 6.5 million vehicles in the city of Los Angeles alone." <br><br>Source: <a href="https://www.iqair.com/usa/california/los-angeles" target="_blank">www.iqair.com/usa/california/los-angeles</a><br>Photo: Shutterstock',
            
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
            id: 'la-intro-3',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles, California',
            //image: '/img/losangeles_chapter1.webp',
            description: '',
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
            image: './img/empty-streets.webp',
            description: '<br>"Data collected by EPA governmental monitors and analyzed in the <a href="https://www.iqair.com/blog/air-quality/report-impact-of-covid-19-on-global-air-quality-earth-day" target="_blank">COVID-19 Air Quality Report</a> found that Los Angeles experienced a long stretch of WHO-target air quality (< 10 μg/m3) from March 7-28, 2020, its longest streak since at least 1995. <br><br>This 18-day stretch of exceptionally clean air is likely the result of lockdown measures put in place to reduce the spread of the COVID-19 pandemic, during which non-essential businesses were ordered to close and residents were urged to stay at home. March 2020 became Los Angeles’s cleanest air quality month on record, averaging PM2.5 levels of 5.6 μg/m3."<br><br>Source: <a href="https://www.iqair.com/usa/california/los-angeles" target="_blank">www.iqair.com/usa/california/los-angeles</a><br>Photo: <a href="https://www.theguardian.com/world/2020/mar/28/los-angeles-deserted-coronavirus-outbreak-california" target="_blank">The Guardian</a>',
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
            id: 'la-intro-4',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles, California',
            //image: '/assets/losangeles_chapter1.webp',
            description: 'Something about cleanest air',
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
            hidden: true,
            title: 'London, United Kingdom',
            image: './img/london_chapter1.webp',
            description: 'Population - 9 Million, Density - 14,500/sq, Car owners- 2.6 Million  The lockdown starts: 26th March 2020',
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
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'london-perimeter',
                    opacity: 1,
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
            description: 'Population - 9 Million, Density - 14,500/sq, Car owners- 2.6 Million  The lockdown starts: 26th March 2020',
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
            image: '',
            description: '“In October 2017 London was the first world megacity to sign up to the World Health Organization’s (WHO) “Breathe Life” campaign. The campaign asks cities to commit to meeting the WHO recommended guideline limit for PM2.5 by 2030. This pledge was subsequently adopted in the statutory London Environment Strategy1 published in May 2018” (from the Doc PM2.5 in London----Roadmap to meeting world health organisation guidelines by 2030) (oct 2019).',
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
            description: 'We believe that changing the way we display the story of pm 2.5 will create a change in Londoners perception and lead to a change in policy ',
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
