// デザインパターンの定義 - 各デザインに3つのレイアウトを持たせる
const designs = [
    {
        name: 'グラデーション',
        layouts: {
            // 縦長レイアウト (height > width * 1.5)
            portrait: () => `
                <div style="
                    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 5%;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    gap: 1vh;
                    box-sizing: border-box;
                ">
                    <div style="font-size: 2vw; font-weight: bold;">CREATIVE</div>
                    <div style="display: flex; flex-direction: column; gap: 0.3vh;">
                        <div style="font-size: 1vw; opacity: 0.9;">Resize Test</div>
                        <div style="font-size: 0.8vw; opacity: 0.8; line-height: 1.2;">Optimized for<br>Portrait View</div>
                    </div>
                    <div style="
                        padding: 0.3vh 1.5vw;
                        background: white;
                        color: #667eea;
                        border-radius: 1.5vw;
                        font-weight: 600;
                        font-size: 0.9vw;
                        margin-top: 0.5vh;
                    ">Learn More</div>
                </div>
            `,
            // 横長レイアウト (width > height * 1.5)
            landscape: () => `
                <div style="
                    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: white;
                    padding: 10% 5%;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                ">
                    <div style="flex: 1;">
                        <div style="font-size: 4vh; font-weight: bold; margin-bottom: 0.5vh;">CREATIVE</div>
                        <div style="font-size: 1.8vh; opacity: 0.9;">Resize Test - Landscape</div>
                    </div>
                    <div style="
                        padding: 1.2vh 3vh;
                        background: white;
                        color: #667eea;
                        border-radius: 5vh;
                        font-weight: 600;
                        font-size: 1.8vh;
                        white-space: nowrap;
                    ">Learn More</div>
                </div>
            `,
            // 正方形レイアウト
            square: () => `
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 10%;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                ">
                    <div style="font-size: 4vw; font-weight: bold; margin-bottom: 1.5vw;">CREATIVE</div>
                    <div style="font-size: 2vw; opacity: 0.9; margin-bottom: 3vw;">Resize Test</div>
                    <div style="
                        padding: 1vw 3vw;
                        background: white;
                        color: #667eea;
                        border-radius: 5vw;
                        font-weight: 600;
                        font-size: 1.8vw;
                    ">Learn More</div>
                </div>
            `
        }
    },
    {
        name: 'カード型',
        layouts: {
            portrait: () => `
                <div style="
                    background: white;
                    display: flex;
                    flex-direction: column;
                    padding: 5% 4%;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        width: 100%;
                        height: 8vh;
                        border-radius: 0.8vw;
                        margin-bottom: 1vh;
                    "></div>
                    <div style="font-size: 1.8vw; color: #333; margin-bottom: 0.5vh; font-weight: bold;">Card</div>
                    <div style="font-size: 0.8vw; color: #666; line-height: 1.3; flex: 1; overflow: hidden;">Responsive card design optimized for portrait orientation.</div>
                    <div style="display: flex; flex-direction: column; gap: 0.3vh;">
                        <div style="padding: 0.3vh; background: #f5576c; color: white; text-align: center; border-radius: 0.3vw; font-weight: 600; font-size: 0.8vw;">Action 1</div>
                        <div style="padding: 0.3vh; background: #f093fb; color: white; text-align: center; border-radius: 0.3vw; font-weight: 600; font-size: 0.8vw;">Action 2</div>
                    </div>
                </div>
            `,
            landscape: () => `
                <div style="
                    background: white;
                    display: flex;
                    align-items: center;
                    padding: 5% 8%;
                    height: 100%;
                    width: 100%;
                    gap: 5%;
                    box-sizing: border-box;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        width: 30%;
                        height: 80%;
                        border-radius: 2vh;
                        flex-shrink: 0;
                    "></div>
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                        <div style="font-size: 3.5vh; color: #333; margin-bottom: 0.5vh; font-weight: bold;">Card Design</div>
                        <div style="font-size: 1.6vh; color: #666; line-height: 1.4; margin-bottom: 1vh;">Optimized for landscape view.</div>
                        <div style="display: flex; gap: 1vw;">
                            <div style="padding: 1vh 2vh; background: #f5576c; color: white; text-align: center; border-radius: 0.8vh; font-weight: 600; font-size: 1.5vh;">Action 1</div>
                            <div style="padding: 1vh 2vh; background: #f093fb; color: white; text-align: center; border-radius: 0.8vh; font-weight: 600; font-size: 1.5vh;">Action 2</div>
                        </div>
                    </div>
                </div>
            `,
            square: () => `
                <div style="
                    background: white;
                    display: flex;
                    flex-direction: column;
                    padding: 8%;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        height: 35%;
                        border-radius: 1vw;
                        margin-bottom: 5%;
                    "></div>
                    <div style="font-size: 3.5vw; color: #333; margin-bottom: 1vw; font-weight: bold;">Card Design</div>
                    <div style="font-size: 1.8vw; color: #666; line-height: 1.4; flex: 1;">Responsive card design.</div>
                    <div style="display: flex; gap: 3%;">
                        <div style="flex: 1; padding: 1vw; background: #f5576c; color: white; text-align: center; border-radius: 0.8vw; font-weight: 600; font-size: 1.6vw;">Action 1</div>
                        <div style="flex: 1; padding: 1vw; background: #f093fb; color: white; text-align: center; border-radius: 0.8vw; font-weight: 600; font-size: 1.6vw;">Action 2</div>
                    </div>
                </div>
            `
        }
    },
    {
        name: 'ヒーロー',
        layouts: {
            portrait: () => `
                <div style="
                    background: linear-gradient(180deg, #0093E9 0%, #80D0C7 100%);
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    width: 100%;
                ">
                    <div style="
                        position: absolute;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle at top, rgba(255,255,255,0.2) 0%, transparent 50%);
                        top: -50%;
                        left: -50%;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        padding: 10% 5%;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        height: 100%;
                        box-sizing: border-box;
                        justify-content: space-between;
                    ">
                        <div style="font-size: 2.2vw; font-weight: bold;">HERO</div>
                        <div style="font-size: 1vw; opacity: 0.95; line-height: 1.3;">Dynamic<br>&<br>Responsive</div>
                        <div style="
                            padding: 0.5vh 1.5vw;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 0.15vw solid white;
                            border-radius: 0.4vw;
                            font-weight: 600;
                            font-size: 0.9vw;
                        ">Get Started</div>
                    </div>
                </div>
            `,
            landscape: () => `
                <div style="
                    background: linear-gradient(90deg, #0093E9 0%, #80D0C7 100%);
                    display: flex;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    width: 100%;
                ">
                    <div style="
                        position: absolute;
                        width: 150%;
                        height: 150%;
                        background: radial-gradient(circle at left, rgba(255,255,255,0.15) 0%, transparent 60%);
                        top: -25%;
                        left: -25%;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        padding: 5% 8%;
                        color: white;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 5%;
                        box-sizing: border-box;
                    ">
                        <div style="flex: 1;">
                            <div style="font-size: 5vh; font-weight: bold; margin-bottom: 0.5vh;">HERO SECTION</div>
                            <div style="font-size: 2vh; opacity: 0.95;">Dynamic & Responsive Layout</div>
                        </div>
                        <div style="
                            padding: 1.2vh 3vh;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 0.2vh solid white;
                            border-radius: 0.8vh;
                            font-weight: 600;
                            font-size: 1.8vh;
                            white-space: nowrap;
                        ">Get Started</div>
                    </div>
                </div>
            `,
            square: () => `
                <div style="
                    background: linear-gradient(180deg, #0093E9 0%, #80D0C7 100%);
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    width: 100%;
                ">
                    <div style="
                        position: absolute;
                        width: 150%;
                        height: 150%;
                        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                        top: -25%;
                        left: -25%;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        padding: 10%;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        height: 100%;
                        box-sizing: border-box;
                    ">
                        <div style="font-size: 4.5vw; font-weight: bold; margin-bottom: 1vw;">HERO</div>
                        <div style="font-size: 2vw; opacity: 0.95; margin-bottom: 3vw;">Dynamic & Responsive</div>
                        <div style="
                            padding: 1.2vw 3vw;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 0.3vw solid white;
                            border-radius: 1vw;
                            font-weight: 600;
                            font-size: 1.8vw;
                        ">Get Started</div>
                    </div>
                </div>
            `
        }
    },
    {
        name: 'ミニマル',
        layouts: {
            portrait: () => `
                <div style="
                    background: #fafafa;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    padding: 8% 5%;
                    box-sizing: border-box;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        width: 40%;
                        height: 15%;
                        background: linear-gradient(180deg, #feca57 0%, #ff6348 100%);
                        border-radius: 50%;
                        opacity: 0.1;
                        top: 42%;
                    "></div>
                    <div style="
                        width: 2vw;
                        height: 2vw;
                        background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                        border-radius: 0.4vw;
                        flex-shrink: 0;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        text-align: center;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    ">
                        <div style="font-size: 1.5vw; color: #333; font-weight: 300; margin-bottom: 0.3vh;">Minimal</div>
                        <div style="font-size: 1.2vw; color: #333; font-weight: 300; margin-bottom: 0.2vh;">Design</div>
                        <div style="font-size: 0.7vw; color: #888; font-weight: 400;">Less is more</div>
                    </div>
                </div>
            `,
            landscape: () => `
                <div style="
                    background: #fafafa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    padding: 5% 8%;
                    box-sizing: border-box;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        width: 30%;
                        height: 60%;
                        background: linear-gradient(90deg, #feca57 0%, #ff6348 100%);
                        border-radius: 50%;
                        opacity: 0.1;
                        right: 15%;
                    "></div>
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 3%;
                        width: 100%;
                        position: relative;
                        z-index: 1;
                    ">
                        <div style="
                            width: 5vh;
                            height: 5vh;
                            background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                            border-radius: 1vh;
                            flex-shrink: 0;
                        "></div>
                        <div>
                            <div style="font-size: 4vh; color: #333; font-weight: 300; margin-bottom: 0.3vh;">Minimal Design</div>
                            <div style="font-size: 1.8vh; color: #888; font-weight: 400;">Less is more</div>
                        </div>
                    </div>
                </div>
            `,
            square: () => `
                <div style="
                    background: #fafafa;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    padding: 5%;
                    box-sizing: border-box;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        width: 35%;
                        height: 35%;
                        background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                        border-radius: 50%;
                        opacity: 0.1;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        text-align: center;
                    ">
                        <div style="
                            width: 3vw;
                            height: 3vw;
                            background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                            border-radius: 0.8vw;
                            margin: 0 auto 1.5vw;
                        "></div>
                        <div style="font-size: 3vw; color: #333; font-weight: 300; margin-bottom: 0.8vw;">Minimal Design</div>
                        <div style="font-size: 1.5vw; color: #888; font-weight: 400;">Less is more</div>
                    </div>
                </div>
            `
        }
    }
];

// アスペクト比に基づいて適切なレイアウトを選択
function selectLayout(width, height) {
    const ratio = width / height;
    
    if (ratio > 1.5) {
        return 'landscape';  // 横長
    } else if (ratio < 0.67) {
        return 'portrait';   // 縦長
    } else {
        return 'square';     // 正方形に近い
    }
}

// テンプレートのアスペクト比定義
const templates = {
    square: { width: 150, height: 150, ratio: 1, name: '正方形 (1:1)' },
    landscape: { width: 300, height: 100, ratio: 3/1, name: '横長 (3:1)' },
    portrait: { width: 100, height: 300, ratio: 1/3, name: '縦長 (1:3)' }
};

let currentDesignIndex = 0;

// 初期化
function init() {
    // イベントリスナーの設定
    document.getElementById('designSelect').addEventListener('change', changeDesign);
    document.getElementById('widthSlider').addEventListener('input', handleWidthSlider);
    document.getElementById('heightSlider').addEventListener('input', handleHeightSlider);
    
    // 初期デザインの適用
    applyDesignToTemplates();
    
    // 初期サイズの適用
    applySize();
}

// デザインをテンプレートに適用
function applyDesignToTemplates() {
    const design = designs[currentDesignIndex];
    
    // 正方形テンプレート
    const squareElement = document.getElementById('squareTemplate');
    squareElement.innerHTML = design.layouts.square();
    
    // 横長テンプレート
    const landscapeElement = document.getElementById('landscapeTemplate');
    landscapeElement.innerHTML = design.layouts.landscape();
    
    // 縦長テンプレート
    const portraitElement = document.getElementById('portraitTemplate');
    portraitElement.innerHTML = design.layouts.portrait();
}

// デザインの変更
function changeDesign(e) {
    currentDesignIndex = parseInt(e.target.value);
    applyDesignToTemplates();
    applySize();
}

// アスペクト比の計算
function calculateAspectRatio(width, height) {
    return width / height;
}

// 最も近いテンプレートを選択
function selectBestTemplate(targetWidth, targetHeight) {
    const targetRatio = calculateAspectRatio(targetWidth, targetHeight);
    let bestTemplate = null;
    let minDifference = Infinity;
    
    for (const [key, template] of Object.entries(templates)) {
        const difference = Math.abs(template.ratio - targetRatio);
        if (difference < minDifference) {
            minDifference = difference;
            bestTemplate = { key, ...template };
        }
    }
    
    return bestTemplate;
}

// スライダーイベントハンドラ
function handleWidthSlider(e) {
    const value = e.target.value;
    document.getElementById('widthValue').textContent = value;
    applySize();
}

function handleHeightSlider(e) {
    const value = e.target.value;
    document.getElementById('heightValue').textContent = value;
    applySize();
}

// サイズ適用
function applySize() {
    const widthSlider = document.getElementById('widthSlider');
    const heightSlider = document.getElementById('heightSlider');
    
    const targetWidth = parseInt(widthSlider.value) || 400;
    const targetHeight = parseInt(heightSlider.value) || 300;
    
    // 最適なテンプレートを選択
    const bestTemplate = selectBestTemplate(targetWidth, targetHeight);
    
    // 情報を更新
    updateInfoDisplay(targetWidth, targetHeight, bestTemplate);
    
    // リサイズされたクリエイティブを作成
    createResizedCreative(targetWidth, targetHeight);
}

// 情報表示の更新
function updateInfoDisplay(width, height, template) {
    const ratio = calculateAspectRatio(width, height);
    const layoutType = selectLayout(width, height);
    
    document.getElementById('inputSize').textContent = `${width} × ${height}px`;
    document.getElementById('inputRatio').textContent = `${ratio.toFixed(2)} (${width}:${height})`;
    document.getElementById('selectedTemplate').textContent = `${template.name} / ${layoutType}レイアウト`;
    document.getElementById('actualSize').textContent = `${width} × ${height}px`;
}

// リサイズされたクリエイティブの作成
function createResizedCreative(width, height) {
    const container = document.getElementById('resizedCreative');
    const design = designs[currentDesignIndex];
    const layoutType = selectLayout(width, height);
    
    // サイズとデザインを適用
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    container.innerHTML = design.layouts[layoutType]();
}


// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);