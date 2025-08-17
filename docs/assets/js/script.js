// Data for the content
const data = {
    department: {
        title: '학과 차원에서의 가치',
        items: [
            {
                heading: '전공 교육의 질 향상',
                description: '학생 랩은 학과 내 학생들의 심화 학습과 연구 활동을 장려하여, 학과 전체 역량 강화가 가능합니다.'
            },
            {
                heading: '우수 인재 양성 및 학과 위상 제고',
                description: '학생 연구 및 실적 증대로 학과의 대외 경쟁력과 명성 향상을 목표로 합니다. 학생랩의 운영은 타 학과와 확실한 차별점을 가지고, 학과의 발전에 기여할 수 있습니다.'
            },
            {
                heading: '산학 협력 및 외부 네트워크 확대',
                description: '연구실, 산업체 등 다양한 기관과의 연계로 외부 네트워크를 확대하고자 합니다. 신설학과 특징 상 졸업생이 적어 네트워크가 제한되어 있지만, 학생 랩을 통해 외부 기관과 컨택하며 학과 내부에서 다양한 기회를 만들고자 합니다.'
            },
            {
                heading: '취·창업 지원 체계 구축',
                description: '학과의 지원을 통해 전공에 맞춘 학생 취·창업 시스템을 별도로 운영하여 취업률을 높이고 학과의 경쟁력을 강화할 수 있습니다.'
            }
        ]
    },
    student: {
        title: '학생 차원에서의 가치',
        items: [
            {
                heading: '전공 지식 심화 및 연구 경험',
                description: '일반 수업에서 다루기 어려운 심도 있는 전공 지식 습득 및 연구 수행 능력을 배양합니다.'
            },
            {
                heading: '진로 준비 및 취·창업 경쟁력 강화',
                description: '실질적인 포트폴리오를 구축하고, 인턴십 및 현장 경험 기회를 확보하여 취업 경쟁력을 높입니다.'
            },
            {
                heading: '멘토링 및 네트워크 형성',
                description: '교수, 선배, 현업 전문가와의 교류를 통해 개인의 성장 기반을 마련합니다.'
            },
            {
                heading: '자율적 성장과 리더십 경험',
                description: '직접 기획·운영하는 활동을 통해 자기 주도성과 협업 능력을 신장시킵니다.'
            },
            {
                heading: '학술 발표 및 성과 달성',
                description: '연구 결과 발표, 공모전 수상 등 성취를 통해 자신감 및 자기 효능감을 증대시킵니다.'
            }
        ]
    },
    professor: {
        title: '교수 차원에서의 가치',
        items: [
            {
                heading: '우수 연구 인력 발굴 및 양성',
                description: '학생랩을 통해 잠재력 있는 학생을 조기 발굴하고 연구 참여를 유도합니다.'
            },
            {
                heading: '교육 효율성 향상',
                description: '학생 주도형 학습을 통해 교수의 교육 부담을 경감하고, 학부연구생 또는 대학원 진학 시 불필요한 기초 교육을 줄입니다.'
            },
            {
                heading: '학과 및 개인 연구실 위상 강화',
                description: '학생들의 성과가 교수 연구실 및 학과의 명성 향상에 기여합니다.'
            },
            {
                heading: '학생 진로 지도 및 후학 양성',
                description: '학생 진로 멘토링을 통한 인재 양성 및 연구 생태계의 지속 가능성을 확보합니다.'
            }
        ]
    }
};

const tabContainer = document.getElementById('tab-container');
const contentDisplay = document.getElementById('content-display');

// Function to render content based on the selected tab
function renderContent(tabName) {
    const currentData = data[tabName];
    
    let contentHtml = `
        <h4 class="text-xl font-bold mb-4 text-gray-800">${currentData.title}</h4>
        <ul class="space-y-4">
    `;
    
    currentData.items.forEach(item => {
        contentHtml += `
            <li class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <strong class="block text-lg text-indigo-600 mb-1">${item.heading}</strong>
                <p class="text-gray-600 text-sm">${item.description}</p>
            </li>
        `;
    });

    contentHtml += `</ul>`;

    contentDisplay.innerHTML = contentHtml;
}

// Add event listeners to the tabs
tabContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if (clickedButton) {
        document.querySelectorAll('#tab-container button').forEach(button => {
            button.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
            button.classList.add('bg-transparent', 'text-gray-700', 'hover:bg-gray-300');
        });

        clickedButton.classList.remove('bg-transparent', 'text-gray-700', 'hover:bg-gray-300');
        clickedButton.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');

        renderContent(clickedButton.dataset.tab);
    }
});

// Initial content render
window.onload = () => {
    renderContent('department');
};