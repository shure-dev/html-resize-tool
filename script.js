// デザインパターンの定義 - 各デザインに3つのレイアウトを持たせる
const designs = [
    {
        name: 'グラデーション',
        layouts: {
            // 縦長レイアウト (height > width * 1.5) - 幅基準
            portrait: (width, height) => `
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
                    box-sizing: border-box;
                ">
                    <div style="font-size: ${width * 0.18}px; font-weight: bold; margin-bottom: ${height * 0.02}px;">CREATIVE</div>
                    <div style="font-size: ${width * 0.10}px; opacity: 0.9; margin-bottom: ${height * 0.01}px;">Resize Test</div>
                    <div style="font-size: ${width * 0.08}px; opacity: 0.8; line-height: 1.3; margin-bottom: ${height * 0.02}px;">Portrait View</div>
                    <div style="
                        padding: ${height * 0.01}px ${width * 0.15}px;
                        background: white;
                        color: #667eea;
                        border-radius: ${width * 0.1}px;
                        font-weight: 600;
                        font-size: ${width * 0.08}px;
                    ">Learn More</div>
                </div>
            `,
            // 横長レイアウト (width > height * 1.5) - 高さ基準
            landscape: (width, height) => `
                <div style="
                    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: white;
                    padding: 5%;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                ">
                    <div style="flex: 1;">
                        <div style="font-size: ${height * 0.30}px; font-weight: bold; margin-bottom: ${height * 0.05}px;">CREATIVE</div>
                        <div style="font-size: ${height * 0.15}px; opacity: 0.9;">Resize Test</div>
                    </div>
                    <div style="
                        padding: ${height * 0.08}px ${height * 0.20}px;
                        background: white;
                        color: #667eea;
                        border-radius: ${height * 0.25}px;
                        font-weight: 600;
                        font-size: ${height * 0.14}px;
                        white-space: nowrap;
                    ">Learn More</div>
                </div>
            `,
            // 正方形レイアウト
            square: (width, height) => `
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
                    <div style="font-size: ${width * 0.20}px; font-weight: bold; margin-bottom: ${width * 0.06}px;">CREATIVE</div>
                    <div style="font-size: ${width * 0.10}px; opacity: 0.9; margin-bottom: ${width * 0.10}px;">Resize Test</div>
                    <div style="
                        padding: ${width * 0.04}px ${width * 0.12}px;
                        background: white;
                        color: #667eea;
                        border-radius: ${width * 0.15}px;
                        font-weight: 600;
                        font-size: ${width * 0.08}px;
                    ">Learn More</div>
                </div>
            `
        }
    },
    {
        name: 'カード型',
        layouts: {
            portrait: (width, height) => `
                <div style="
                    background: white;
                    display: flex;
                    flex-direction: column;
                    padding: 5%;
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        width: 100%;
                        height: 20%;
                        border-radius: ${width * 0.05}px;
                        margin-bottom: ${height * 0.02}px;
                    "></div>
                    <div style="font-size: ${width * 0.15}px; color: #333; margin-bottom: ${height * 0.02}px; font-weight: bold;">Card</div>
                    <div style="font-size: ${width * 0.08}px; color: #666; line-height: 1.4; flex: 1; overflow: hidden;">Portrait card design</div>
                    <div style="display: flex; flex-direction: column; gap: ${height * 0.01}px;">
                        <div style="padding: ${height * 0.01}px ${width * 0.08}px; background: #f5576c; color: white; text-align: center; border-radius: ${width * 0.04}px; font-weight: 600; font-size: ${width * 0.08}px;">Action 1</div>
                        <div style="padding: ${height * 0.01}px ${width * 0.08}px; background: #f093fb; color: white; text-align: center; border-radius: ${width * 0.04}px; font-weight: 600; font-size: ${width * 0.08}px;">Action 2</div>
                    </div>
                </div>
            `,
            landscape: (width, height) => `
                <div style="
                    background: white;
                    display: flex;
                    align-items: center;
                    padding: 5%;
                    height: 100%;
                    width: 100%;
                    gap: ${width * 0.03}px;
                    box-sizing: border-box;
                ">
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        width: 25%;
                        height: 70%;
                        border-radius: ${height * 0.1}px;
                        flex-shrink: 0;
                    "></div>
                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                        <div style="font-size: ${height * 0.25}px; color: #333; margin-bottom: ${height * 0.05}px; font-weight: bold;">Card Design</div>
                        <div style="font-size: ${height * 0.12}px; color: #666; line-height: 1.4; margin-bottom: ${height * 0.08}px;">Landscape view</div>
                        <div style="display: flex; gap: ${width * 0.02}px;">
                            <div style="padding: ${height * 0.06}px ${height * 0.12}px; background: #f5576c; color: white; text-align: center; border-radius: ${height * 0.05}px; font-weight: 600; font-size: ${height * 0.10}px;">Action 1</div>
                            <div style="padding: ${height * 0.06}px ${height * 0.12}px; background: #f093fb; color: white; text-align: center; border-radius: ${height * 0.05}px; font-weight: 600; font-size: ${height * 0.10}px;">Action 2</div>
                        </div>
                    </div>
                </div>
            `,
            square: (width, height) => `
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
                        height: 30%;
                        border-radius: ${width * 0.05}px;
                        margin-bottom: ${width * 0.05}px;
                    "></div>
                    <div style="font-size: ${width * 0.15}px; color: #333; margin-bottom: ${width * 0.04}px; font-weight: bold;">Card Design</div>
                    <div style="font-size: ${width * 0.08}px; color: #666; line-height: 1.4; flex: 1;">Responsive card</div>
                    <div style="display: flex; gap: ${width * 0.03}px;">
                        <div style="flex: 1; padding: ${width * 0.04}px; background: #f5576c; color: white; text-align: center; border-radius: ${width * 0.03}px; font-weight: 600; font-size: ${width * 0.07}px;">Action 1</div>
                        <div style="flex: 1; padding: ${width * 0.04}px; background: #f093fb; color: white; text-align: center; border-radius: ${width * 0.03}px; font-weight: 600; font-size: ${width * 0.07}px;">Action 2</div>
                    </div>
                </div>
            `
        }
    },
    {
        name: 'ヒーロー',
        layouts: {
            portrait: (width, height) => `
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
                        padding: 5%;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        height: 100%;
                        box-sizing: border-box;
                        justify-content: center;
                    ">
                        <div style="font-size: ${width * 0.20}px; font-weight: bold; margin-bottom: ${height * 0.02}px;">HERO</div>
                        <div style="font-size: ${width * 0.08}px; opacity: 0.95; line-height: 1.3; margin-bottom: ${height * 0.03}px;">Dynamic &<br>Responsive</div>
                        <div style="
                            padding: ${height * 0.01}px ${width * 0.15}px;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 1px solid white;
                            border-radius: ${width * 0.08}px;
                            font-weight: 600;
                            font-size: ${width * 0.08}px;
                        ">Get Started</div>
                    </div>
                </div>
            `,
            landscape: (width, height) => `
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
                        padding: 5%;
                        color: white;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: ${width * 0.03}px;
                        box-sizing: border-box;
                    ">
                        <div style="flex: 1;">
                            <div style="font-size: ${height * 0.28}px; font-weight: bold; margin-bottom: ${height * 0.05}px;">HERO SECTION</div>
                            <div style="font-size: ${height * 0.14}px; opacity: 0.95;">Dynamic & Responsive</div>
                        </div>
                        <div style="
                            padding: ${height * 0.08}px ${height * 0.16}px;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 1px solid white;
                            border-radius: ${height * 0.08}px;
                            font-weight: 600;
                            font-size: ${height * 0.12}px;
                            white-space: nowrap;
                        ">Get Started</div>
                    </div>
                </div>
            `,
            square: (width, height) => `
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
                        <div style="font-size: ${width * 0.22}px; font-weight: bold; margin-bottom: ${width * 0.05}px;">HERO</div>
                        <div style="font-size: ${width * 0.10}px; opacity: 0.95; margin-bottom: ${width * 0.10}px;">Dynamic & Responsive</div>
                        <div style="
                            padding: ${width * 0.05}px ${width * 0.12}px;
                            background: rgba(255,255,255,0.25);
                            backdrop-filter: blur(10px);
                            color: white;
                            border: 1px solid white;
                            border-radius: ${width * 0.04}px;
                            font-weight: 600;
                            font-size: ${width * 0.08}px;
                        ">Get Started</div>
                    </div>
                </div>
            `
        }
    },
    {
        name: 'ミニマル',
        layouts: {
            portrait: (width, height) => `
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
                        width: 40%;
                        height: 15%;
                        background: linear-gradient(180deg, #feca57 0%, #ff6348 100%);
                        border-radius: 50%;
                        opacity: 0.1;
                    "></div>
                    <div style="
                        width: ${width * 0.20}px;
                        height: ${width * 0.20}px;
                        background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                        border-radius: ${width * 0.04}px;
                        margin-bottom: ${height * 0.03}px;
                    "></div>
                    <div style="
                        position: relative;
                        z-index: 1;
                        text-align: center;
                    ">
                        <div style="font-size: ${width * 0.14}px; color: #333; font-weight: 300; margin-bottom: ${height * 0.01}px;">Minimal</div>
                        <div style="font-size: ${width * 0.11}px; color: #333; font-weight: 300; margin-bottom: ${height * 0.01}px;">Design</div>
                        <div style="font-size: ${width * 0.07}px; color: #888; font-weight: 400;">Less is more</div>
                    </div>
                </div>
            `,
            landscape: (width, height) => `
                <div style="
                    background: #fafafa;
                    display: flex;
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
                        gap: ${width * 0.03}px;
                        width: 100%;
                        position: relative;
                        z-index: 1;
                    ">
                        <div style="
                            width: ${height * 0.40}px;
                            height: ${height * 0.40}px;
                            background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                            border-radius: ${height * 0.08}px;
                            flex-shrink: 0;
                        "></div>
                        <div>
                            <div style="font-size: ${height * 0.22}px; color: #333; font-weight: 300; margin-bottom: ${height * 0.03}px;">Minimal Design</div>
                            <div style="font-size: ${height * 0.10}px; color: #888; font-weight: 400;">Less is more</div>
                        </div>
                    </div>
                </div>
            `,
            square: (width, height) => `
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
                            width: ${width * 0.15}px;
                            height: ${width * 0.15}px;
                            background: linear-gradient(135deg, #feca57 0%, #ff6348 100%);
                            border-radius: ${width * 0.04}px;
                            margin: 0 auto ${width * 0.07}px;
                        "></div>
                        <div style="font-size: ${width * 0.15}px; color: #333; font-weight: 300; margin-bottom: ${width * 0.04}px;">Minimal Design</div>
                        <div style="font-size: ${width * 0.07}px; color: #888; font-weight: 400;">Less is more</div>
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
    squareElement.innerHTML = design.layouts.square(150, 150);
    
    // 横長テンプレート
    const landscapeElement = document.getElementById('landscapeTemplate');
    landscapeElement.innerHTML = design.layouts.landscape(300, 100);
    
    // 縦長テンプレート
    const portraitElement = document.getElementById('portraitTemplate');
    portraitElement.innerHTML = design.layouts.portrait(100, 300);
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
    container.innerHTML = design.layouts[layoutType](width, height);
}


// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);