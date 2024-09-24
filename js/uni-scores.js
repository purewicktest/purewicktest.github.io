const config = {
    totalUsers: ">1000",
    mostCommonScore: 290,
    universities: [
        { name: 'University of Leeds', acronym: 'UL', score: 125 },
        { name: 'University of Manchester', acronym: 'UM', score: 128 },
        { name: 'Newcastle University', acronym: 'NU', score: 132 },
        { name: 'University of Liverpool', acronym: 'UL', score: 135 },
        { name: 'University of Bristol', acronym: 'UBR', score: 137 },
        { name: 'University of Nottingham', acronym: 'UN', score: 140 },
        { name: 'University of Glasgow', acronym: 'UG', score: 142 },
        { name: 'Cardiff University', acronym: 'CU', score: 145 },
        { name: 'University of Birmingham', acronym: 'UBIRM', score: 148 },
        { name: 'University of Sheffield', acronym: 'US', score: 150 },
        { name: 'University of Edinburgh', acronym: 'UE', score: 153 },
        { name: 'University of Southampton', acronym: 'US', score: 156 },
        { name: 'University of Sussex', acronym: 'US', score: 159 },
        { name: 'University of Warwick', acronym: 'UW', score: 162 },
        { name: 'University of Leicester', acronym: 'UL', score: 165 },
        { name: 'University of Kent', acronym: 'UK', score: 167 },
        { name: 'University of Exeter', acronym: 'UEX', score: 169 },
        { name: 'University of York', acronym: 'UY', score: 172 },
        { name: 'University of East Anglia', acronym: 'UEA', score: 175 },
        { name: 'University of Reading', acronym: 'UR', score: 178 },
        { name: 'University of Portsmouth', acronym: 'UP', score: 180 },
        { name: 'University of Dundee', acronym: 'UDUN', score: 183 },
        { name: 'University of Stirling', acronym: 'US', score: 185 },
        { name: 'University of Aberdeen', acronym: 'UA', score: 187 },
        { name: 'University of Essex', acronym: 'UEE', score: 190 },
        { name: 'University of Surrey', acronym: 'US', score: 192 },
        { name: 'University of Lancaster', acronym: 'UL', score: 195 },
        { name: "Queen's University Belfast", acronym: 'QUB', score: 197 },
        { name: 'Swansea University', acronym: 'SU', score: 199 },
        { name: 'University of Strathclyde', acronym: 'US', score: 202 },
        { name: 'University of Plymouth', acronym: 'UP', score: 204 },
        { name: 'University of Lincoln', acronym: 'UL', score: 206 },
        { name: 'University of Huddersfield', acronym: 'UH', score: 208 },
        { name: 'University of Hull', acronym: 'UH', score: 210 },
        { name: 'University of Bath', acronym: 'UB', score: 212 },
        { name: 'University of Salford', acronym: 'US', score: 214 },
        { name: 'University of Brighton', acronym: 'UBRI', score: 216 },
        { name: 'University of the West of England', acronym: 'UWE', score: 218 },
        { name: 'Oxford Brookes University', acronym: 'OBU', score: 220 },
        { name: 'Nottingham Trent University', acronym: 'NTU', score: 222 },
        { name: 'Manchester Metropolitan University', acronym: 'MMU', score: 224 },
        { name: 'Liverpool John Moores University', acronym: 'LJMU', score: 226 },
        { name: 'Leeds Beckett University', acronym: 'LBU', score: 228 },
        { name: 'Kingston University', acronym: 'KU', score: 230 },
        { name: 'Birmingham City University', acronym: 'BCU', score: 232 },
        { name: 'Bournemouth University', acronym: 'BU', score: 234 },
        { name: 'Coventry University', acronym: 'CU', score: 236 },
        { name: 'Northumbria University', acronym: 'NU', score: 238 },
        { name: 'Glasgow Caledonian University', acronym: 'GCU', score: 240 },
        { name: 'Heriot-Watt University', acronym: 'HWU', score: 242 },
        { name: 'University of Greenwich', acronym: 'UG', score: 244 },
        { name: 'University of Westminster', acronym: 'UW', score: 246 },
        { name: 'Sheffield Hallam University', acronym: 'SHU', score: 248 },
        { name: 'University of Roehampton', acronym: 'UR', score: 250 },
        { name: 'University of Chester', acronym: 'UCHE', score: 252 },
        { name: 'University of Derby', acronym: 'UD', score: 254 },
        { name: 'University of Hertfordshire', acronym: 'UH', score: 256 },
        { name: 'University of Wolverhampton', acronym: 'UW', score: 258 },
        { name: 'Middlesex University', acronym: 'MUL', score: 260 },
        { name: 'University of Winchester', acronym: 'UW', score: 262 },
        { name: 'University of Gloucestershire', acronym: 'UGLO', score: 264 },
        { name: 'University of Cumbria', acronym: 'UC', score: 266 },
        { name: 'University of Bedfordshire', acronym: 'UBED', score: 268 },
        { name: 'University of Northampton', acronym: 'UN', score: 270 },
        { name: 'University of Central Lancashire', acronym: 'UCLan', score: 272 },
        { name: 'University of Sunderland', acronym: 'US', score: 274 },
        { name: 'University of Bolton', acronym: 'UBOL', score: 276 },
        { name: 'University of South Wales', acronym: 'USW', score: 278 },
        { name: 'University of the West of Scotland', acronym: 'UWS', score: 280 },
        { name: 'Edinburgh Napier University', acronym: 'ENU', score: 282 },
        { name: 'Robert Gordon University', acronym: 'RGU', score: 284 },
        { name: 'University of Abertay Dundee', acronym: 'UAD', score: 286 },
        { name: 'Anglia Ruskin University', acronym: 'ARU', score: 288 },
        { name: 'Bath Spa University', acronym: 'BSU', score: 290 },
        { name: 'Cardiff Metropolitan University', acronym: 'CMU', score: 292 },
        { name: 'De Montfort University', acronym: 'DMU', score: 294 },
        { name: 'Falmouth University', acronym: 'FU', score: 296 },
        { name: 'Keele University', acronym: 'UK', score: 298 },
        { name: 'Liverpool Hope University', acronym: 'LHU', score: 300 },
        { name: 'London Metropolitan University', acronym: 'LMU', score: 302 },
        { name: 'London South Bank University', acronym: 'LSBU', score: 304 },
        { name: 'Queen Margaret University', acronym: 'QM', score: 306 },
        { name: 'Royal Holloway, University of London', acronym: 'RHUL', score: 308 },
        { name: "St Mary's University, Twickenham", acronym: 'SMU', score: 310 },
        { name: 'Staffordshire University', acronym: 'SU', score: 312 },
        { name: 'Teesside University', acronym: 'TU', score: 314 },
        { name: 'Ulster University', acronym: 'UU', score: 316 },
        { name: 'University of the Arts London', acronym: 'UAL', score: 318 },
        { name: 'University of Buckingham', acronym: 'UBUCK', score: 320 },
        { name: 'University of Chichester', acronym: 'UCHI', score: 322 },
        { name: 'University of East London', acronym: 'UEL', score: 324 },
        { name: 'University of St Andrews', acronym: 'USA', score: 326 },
        { name: 'University of Suffolk', acronym: 'US', score: 328 },
        { name: 'University of Wales Trinity Saint David', acronym: 'UWTSD', score: 330 },
        { name: 'Wrexham Glyndwr University', acronym: 'WGU', score: 332 },
        { name: 'York St John University', acronym: 'YSJ', score: 334 },
        { name: 'Buckinghamshire New University', acronym: 'BNU', score: 336 },
        { name: 'Goldsmiths, University of London', acronym: 'GUL', score: 338 },
        { name: 'University of West London', acronym: 'UWL', score: 340 },
        { name: 'Aberystwyth University', acronym: 'AU', score: 342 },
        { name: 'Bangor University', acronym: 'BU', score: 344 },
        { name: 'Birkbeck, University of London', acronym: 'BUL', score: 346 },
        { name: 'Bishop Grosseteste University', acronym: 'BGU', score: 348 },
        { name: 'Brunel University London', acronym: 'BUL', score: 350 },
        { name: 'City, University of London', acronym: 'CUL', score: 352 },
        { name: 'Cranfield University', acronym: 'CU', score: 354 },
        { name: 'Edge Hill University', acronym: 'EHU', score: 356 },
        { name: 'Glasgow School of Art', acronym: 'GSA', score: 358 },
        { name: 'Guildhall School of Music and Drama', acronym: 'GSMD', score: 360 },
        { name: 'Harper Adams University', acronym: 'HAU', score: 362 },
        { name: 'Imperial College London', acronym: 'ICL', score: 364 },
        { name: "King's College London", acronym: 'KCL', score: 366 },
        { name: 'Loughborough University', acronym: 'LU', score: 368 },
        { name: 'London School of Economics and Political Science', acronym: 'LSE', score: 370 },
        { name: 'Newman University', acronym: 'NU', score: 372 },
        { name: 'Royal Academy of Music', acronym: 'RAM', score: 374 },
        { name: 'Royal Agricultural University', acronym: 'RAU', score: 376 },
        { name: 'Royal College of Art', acronym: 'RCA', score: 378 },
        { name: 'Royal Northern College of Music', acronym: 'RNCM', score: 380 },
        { name: 'SOAS University of London', acronym: 'SOAS', score: 382 },
        { name: 'SRUC (Scotlands Rural College)', acronym: 'SRUC', score: 384 },
        { name: "St George's, University of London", acronym: 'SGUL', score: 386 },
        { name: 'Trinity Laban Conservatoire of Music and Dance', acronym: 'TLCMD', score: 388 },
        { name: 'University College London (UCL)', acronym: 'UCL', score: 390 },
        { name: 'University for the Creative Arts', acronym: 'UCA', score: 392 },
        { name: 'University of Law', acronym: 'ULaw', score: 394 },
        { name: 'University of London', acronym: 'UL', score: 396 },
        { name: 'University of Oxford', acronym: 'UO', score: 398 },
        { name: 'University of Cambridge', acronym: 'UCAM', score: 400 },
        { name: 'Regent\'s University London', acronym: 'RUL', score: 400 },
        { name: 'Royal Veterinary College', acronym: 'RVC', score: 400 },
        { name: 'University of the Highlands and Islands', acronym: 'UHI', score: 400 },
        { name: 'Writtle University College', acronym: 'WUC', score: 400 }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const universities = config.universities; 

    const stats = {
        totalUsers: config.totalUsers,  
        mostCommonScore: config.mostCommonScore,  
    };

    let currentStartIndex = 0;
    let averageScoresChart;

    function updatePodium() {
        const sortedUniversities = universities.sort((a, b) => a.score - b.score);
        const bottomUniversities = sortedUniversities.slice(0, 3);
        document.getElementById('firstUniName').textContent = bottomUniversities[0].name;
        document.getElementById('firstUniScore').textContent = bottomUniversities[0].score;
        document.getElementById('secondUniName').textContent = bottomUniversities[1].name;
        document.getElementById('secondUniScore').textContent = bottomUniversities[1].score;
        document.getElementById('thirdUniName').textContent = bottomUniversities[2].name;
        document.getElementById('thirdUniScore').textContent = bottomUniversities[2].score;
    }

    function displayStats() {
        document.getElementById('totalUsers').textContent = stats.totalUsers;
        document.getElementById('mostCommonScore').textContent = stats.mostCommonScore;
    }

    window.updateChart = function() {
        const sortOrder = document.getElementById('sortOrder').value;
        const sortedUniversities = universities.sort((a, b) => sortOrder === 'asc' ? a.score - b.score : b.score - a.score);
        const filteredUniversities = sortedUniversities.slice(currentStartIndex, currentStartIndex + 5);

        const chartData = {
            labels: filteredUniversities.map(u => u.acronym), 
            datasets: [{
                label: 'Average Score',
                data: filteredUniversities.map(u => u.score),
                backgroundColor: 'rgba(76, 56, 128, 0.6)'
            }]
        };

        const ctx = document.getElementById('averageScoresChart').getContext('2d');
        if (averageScoresChart) {
            averageScoresChart.destroy();
        }
        averageScoresChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const index = tooltipItem.dataIndex;
                                return `${filteredUniversities[index].name}: ${tooltipItem.raw}`; 
                            }
                        }
                    }
                }
            }
        });
    };

    window.navigateChart = function(step) {
        currentStartIndex = Math.max(0, Math.min(universities.length - 5, currentStartIndex + step));
        updateChart();
    };

    document.getElementById('applySortButton').addEventListener('click', function() {
        currentStartIndex = 0; 
        updateChart(); 
    });

    window.backButton = function() {
        window.location.href = 'index.html';
    };

    window.backToResultsButton = function() {
        window.location.href = 'result.html';
    };

    updatePodium(); 
    displayStats();
    updateChart();
});