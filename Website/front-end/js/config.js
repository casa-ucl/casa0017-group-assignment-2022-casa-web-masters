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
            id: 'research-intro',
            alignment: 'center',
            hidden: false,
            title: 'How quickly does air quality improve when the world shuts down?',
            image: '',
            description: ' The aim of our website is to investigate whether there is any visual or statistical correlation between changes in AQI measurements between London and Los Angeles leading up to and during the beginning of the Coronavirus pandemic in March of 2020. Due to lockdown measures, >>>>>>>>>>>> would a car-centric city have seen a more drastic improvement in its air quality than a non-car-centric city? >>>>>> In order to test this, two cities were chosen that have similarities among total Car owners , But diffrent population density, and total population >>>>>>>>> . About why we are creating the web side - is that for policy makers, and companies that want to create a thier local standart of air quality. With our AQI index our consumers are more aware to the health causes of PM 2.5 and can act to make a local change for there citizens and employers health.',
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
                     layer: 'los-angeles-county-heatmap',
                     opacity: 0,
                     //duration: 5000
                     layer: 'london-heatmap',
                     opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'los-angeles-county-heatmap',
                     opacity: 0
                 }
            ]
        },
        
        {
            id: 'la-intro',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County, California',
            image: '/img/losangeles_chapter1.webp',
            description: 'Population - 3.9 Million, Density - 8,304/sq, Car owners- 2,276,974  The lockdown starts: 19th March 2020',
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
                     layer: 'los-angeles-perimeter',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'los-angeles-perimeter',
                     opacity: 0
                 }
            ]
        },

        {
            id: 'la-intro-2',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County, California',
            //image: '/img/losangeles_chapter1.webp',
            description: 'FFFFFF',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'la-intro-3',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles County, California',
            //image: '/img/losangeles_chapter1.webp',
            description: 'rrrrrr',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'la-intro-4',
            alignment: 'left',
            hidden: true,
            title: 'Los Angeles County, California',
            //image: '/assets/losangeles_chapter1.webp',
            description: 'sss',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'london-intro-1',
            alignment: 'right',
            hidden: false,
            title: 'London, United Kingdom',
            image: '/assets/london_chapter1.webp',
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
            onChapterEnter: [],
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
                center: [-0.01805, 51.53370],
                zoom: 10.49,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
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
                center: [-0.01805, 51.53370],
                zoom: 10.49,
                pitch: 45.00,
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
            description: 'We belive that changing the way we display the the story of pm 2.5 will create a change in Londoners preciptions and lead to change policy .',
            location: {
                center: [-0.01805, 51.53370],
                zoom: 10.49,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
