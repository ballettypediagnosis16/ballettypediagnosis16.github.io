<script>
    // 16タイプごとの「考案済みワード」の定義
    const typeNames = {
        "TEPS": "ドン・キホーテ タイプ",
        "TEPC": "サタネラ タイプ",
        "IEPS": "ピーターパン タイプ",
        "IEPC": "タリスマン タイプ",
        "TEGS": "くるみ割り人形 タイプ",
        "TEGC": "ゼンツァーノ タイプ",
        "IEGS": "シンデレラ タイプ",
        "IEGC": "エチュード タイプ",
        "TDPS": "パリの炎 タイプ",
        "TDPC": "シェヘラザード タイプ",
        "IDPS": "ザ・カブキ タイプ",
        "IDPC": "カルメン タイプ",
        "TDGS": "ジゼル タイプ",
        "TDGC": "ラ・シルフィード タイプ",
        "IDGS": "マノン タイプ",
        "IDGC": "セレナーデ タイプ"
    };

    // 16パターンごとの「解説テキスト」
    const typeDescriptions = {
        "TEPS": `あなたにオススメのバレエ作品は“ドン・キホーテ タイプ”です。<br>
古くから上演されてきた王道作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ドン・キホーテ<br>
・海賊（プティパ版）<br>
・エスメラルダ（ペロー版）<br>
・ナポリ<br>
・せむしの仔馬`,
        "TEPC": `あなたにオススメのバレエ作品は“サタネラ タイプ”です。<br>
古くから上演されてきた王道作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・サタネラ（グラン・パ・ド・ドゥ）<br>
・アルレキナーダ（グラン・パ・ド・ドゥ）<br>
・人形の精<br>
・薔薇の精`,
        "IEPS": `あなたにオススメのバレエ作品は“ピーターパン タイプ”です。<br>
100年以内に作られた新しめの作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ピーターパン<br>
・アラジン<br>
・ドラゴン・クエスト<br>
・こうもり`,
        "IEPC": `あなたにオススメのバレエ作品は“タリスマン タイプ”です。<br>
100年以内に作られた新しめの作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・タリスマン（グラン・パ・ド・ドゥ）<br>
・ボレロ<br>
・ダイアナとアクテオン（グラン・パ・ド・ドゥ from エスメラルダ）`,
        "TEGS": `あなたにオススメのバレエ作品は“くるみ割り人形 タイプ”です。<br>
古くから上演されてきた王道作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・くるみ割り人形<br>
・眠れる森の美女<br>
・白鳥の湖<br>
・パキータ<br>
・ライモンダ<br>
・ラ・フィーユ・マル・ガルデ<br>
・コッペリア`,
        "TEGC": `あなたにオススメのバレエ作品は“ゼンツァーノ タイプ”です。<br>
古くから上演されてきた王道作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ゼンツァーノの花祭り（グラン・パ・ド・ドゥ）<br>
・騎兵隊の休息<br>
・レ・シルフィード<br>
・マルキタンカ`,
        "IEGS": `あなたにオススメのバレエ作品は“シンデレラ タイプ”です。<br>
100年以内に作られた新しめの作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・シンデレラ<br>
・ジュエルズ<br>
・シルヴィア（アシュトン版）<br>
・真夏の夜の夢（バランシン版）`,
        "IEGC": `あなたにオススメのバレエ作品は“エチュード タイプ”です。<br>
100年以内に作られた新しめの作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
喜劇系の作品なので、見終わった後も明るい気分で過ごせることでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・エチュード<br>
・真夏の夜の夢（アシュトン版）<br>
・バレエの情景`,
        "TDPS": `あなたにオススメのバレエ作品は“パリの炎 タイプ”です。<br>
古くから上演されてきた王道作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・パリの炎<br>
・ラ・バヤデール<br>
・エスメラルダ（プティパ版）<br>
・ファラオの娘`,
        "TDPC": `あなたにオススメのバレエ作品は“シェヘラザード タイプ”です。<br>
古くから上演されてきた王道作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・シェヘラザード<br>
・春の祭典（ニジンスキー版）<br>
・火の鳥<br>
・ペトルーシュカ`,
        "IDPS": `あなたにオススメのバレエ作品は“ザ・カブキ タイプ”です。<br>
100年以内に作られた新しめの作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ザ・カブキ<br>
・海賊（熊川版）<br>
・スパルタクス<br>
・ノートルダムドパリ（プティ版エスメラルダ）<br>
・愛の伝説<br>
・バフチサライの泉<br>
・レ・ミゼラブル<br>
・イワン雷帝<br>
・スペードの女王`,
        "IDPC": `あなたにオススメのバレエ作品は“カルメン タイプ”です。<br>
100年以内に作られた新しめの作品であり、パワフルで情熱的な舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・カルメン<br>
・若者と死<br>
・春の祭典（ベジャール版）`,
        "TDGS": `あなたにオススメのバレエ作品は“ジゼル タイプ”です。<br>
古くから上演されてきた王道作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ジゼル<br>
・ロミオとジュリエット<br>
・白鳥の湖（ヌレエフ版）`,
        "TDGC": `あなたにオススメのバレエ作品は“ラ・シルフィード タイプ”です。<br>
古くから上演されてきた王道作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・ラ・シルフィード<br>
・瀕死の白鳥<br>
・レ・シルフィード<br>
・ジゼル（第２幕）`,
        "IDGS": `あなたにオススメのバレエ作品は“マノン タイプ”です。<br>
100年以内に作られた新しめの作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
世界観に長い時間浸れるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・マノン<br>
・オネーギン<br>
・椿姫（ノイマイヤー版）`,
        "IDGC": `あなたにオススメのバレエ作品は“セレナーデ タイプ”です。<br>
100年以内に作られた新しめの作品であり、流麗でエレガンスな舞台は、まさにあなたにピッタリ！<br>
悲劇・教訓系の作品なので、見終わった後も深く余韻を楽しめるでしょう。<br>
比較的短い時間で、さっと簡単に楽しめるのもポイント！<br><br>
<div class="recommend-title">【おすすめ作品一覧】</div>
・セレナーデ<br>
・大地の歌<br>
・マルグリットとアルマン（アシュトン版椿姫）`
    };

    // スライダー用の管理変数
    let currentSlide = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let activeDotColor = "#333333";

    function calculateResult() {

        // ==============================
        // 1. 未回答チェック
        // ==============================

        const totalQuestions = 28;

        const checkedAnswers =
            document.querySelectorAll(
                '.mbti-options input[type="radio"]:checked'
            );

        if (checkedAnswers.length < totalQuestions) {
            alert("未回答の質問があります。");
            return;
        }

        // ==============================
        // 2. スコア計算
        // ==============================

        window.currentDiagnosisScores = {
            T: 0,
            I: 0,
            E: 0,
            D: 0,
            P: 0,
            G: 0,
            S: 0,
            C: 0
        };

        checkedAnswers.forEach((ans) => {

            const [targetCharacter, level] = ans.value.split("_");

            window.currentDiagnosisScores[targetCharacter] +=
                parseInt(level, 10);
        });

        // ==============================
        // 3. タイプ判定
        // ==============================

        let type = "";

        type +=
            window.currentDiagnosisScores.T >
            window.currentDiagnosisScores.I
                ? "T"
                : "I";

        type +=
            window.currentDiagnosisScores.E >
            window.currentDiagnosisScores.D
                ? "E"
                : "D";

        type +=
            window.currentDiagnosisScores.P >
            window.currentDiagnosisScores.G
                ? "P"
                : "G";

        type +=
            window.currentDiagnosisScores.S >
            window.currentDiagnosisScores.C
                ? "S"
                : "C";

        // ==============================
        // 4. 日本語タイプ名
        // ==============================

        const JapaneseTypeName = typeNames[type];

        if (!JapaneseTypeName) {
            console.error("未知の診断タイプ:", type);
            return;
        }

        // ==============================
        // 5. Google Analytics
        // ==============================

        if (typeof gtag === "function") {
            gtag("event", "diagnosis_complete", {
                result_type_name: JapaneseTypeName,
                result_type_code: type
            });
        }

        // ==============================
        // 6. カラーグループ
        // ==============================

        let colorGroup = "";

        if (
            ["TEPS", "TEPC", "IEPS", "IEPC"]
                .includes(type)
        ) {
            colorGroup = "group1";

        } else if (
            ["TEGS", "TEGC", "IEGS", "IEGC"]
                .includes(type)
        ) {
            colorGroup = "group2";

        } else if (
            ["TDPS", "TDPC", "IDPS", "IDPC"]
                .includes(type)
        ) {
            colorGroup = "group3";

        } else if (
            ["TDGS", "TDGC", "IDGS", "IDGC"]
                .includes(type)
        ) {
            colorGroup = "group4";
        }

        // ==============================
        // 7. ドットカラー
        // ==============================

        const groupDotColors = {
            group1: "#d4a373",
            group2: "#4a90e2",
            group3: "#e76f51",
            group4: "#9b51e0"
        };

        activeDotColor =
            groupDotColors[colorGroup] ||
            "#333333";

        // ==============================
        // 8. 結果画面背景色
        // ==============================

        const bodyBgColors = {
            group1: "rgba(247, 247, 238, 1)",
            group2: "rgba(238, 244, 247, 1)",
            group3: "rgba(247, 238, 238, 1)",
            group4: "rgba(244, 238, 247, 1)"
        };

        const resultContainer = document.getElementById("result-screen");

        if (
            resultContainer && bodyBgColors[colorGroup]
        ) {
            resultContainer.style.backgroundColor = bodyBgColors[colorGroup];
        }

        // ==============================
        // 9. 結果タイプ表示
        // ==============================

        document.getElementById("result").innerHTML = `
            <div class="result-label">
                あなたのタイプは…
            </div>

            <div class="result-type-name bg-${colorGroup}">
                ${JapaneseTypeName}
            </div>

            <div class="result-type-code color-${colorGroup}">
                （${type}）
            </div>
        `;

        // ==============================
        // 10. 結果画像
        // ==============================

        const resultImg = document.getElementById("result-image");

        if (resultImg) {
            resultImg.src = `./images/${type}.png`;
            resultImg.style.display = "block";
        }

        // ==============================
        // 11. グラフ
        // ==============================

        renderResultCharts(
            window.currentDiagnosisScores
        );

        // ==============================
        // 12. 解説
        // ==============================

        const descriptionBox =
            document.getElementById(
                "result-description-box"
            );

        if (descriptionBox) {

            descriptionBox.innerHTML = typeDescriptions[type];

            descriptionBox.className = "";

            descriptionBox.classList.add(
                `border-${colorGroup}`
            );
        }

        // ==============================
        // 13. スライダー
        // ==============================

        initResultSlider();

        // ==============================
        // 14. 画面切り替え
        // ==============================

        document
            .getElementById("quiz-screen")
            .classList.add("hidden");

        document
            .getElementById("sticky-header")
            .classList.add("hidden");

        document
            .getElementById("result-screen")
            .classList.remove("hidden");

        // ==============================
        // 15. 一番上へ
        // ==============================

        window.scrollTo(0, 0);
    }

    /* 以下、スライダー制御用の新設関数群 */
    function initResultSlider() {
        currentSlide = 0;
        updateSliderPosition();
        setupSwipeEvents();
    }

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index > 2) index = 2;
        currentSlide = index;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const track = document.getElementById("sliderTrack");
        if (track) {
            track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
        }

        // ドット状態更新
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add("active");
                dot.style.backgroundColor = activeDotColor;
            } else {
                dot.classList.remove("active");
                dot.style.backgroundColor = "#b1b1b1";
            }
        });
    }

    function setupSwipeEvents() {
        const container = document.getElementById("sliderContainer");
        if (!container) return;

        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let didSwipe = false;

        // 横方向のフリックをブラウザのスクロールより優先
        container.style.touchAction = "pan-y";

        // 指・ペン・マウスの押下開始
        container.addEventListener("pointerdown", (e) => {
            // 左クリック以外のマウス操作は無視
            if (e.pointerType === "mouse" && e.button !== 0) return;

            startX = e.clientX;
            startY = e.clientY;
            isDragging = true;
            didSwipe = false;

            // タッチ・ペン操作をこの要素で追跡
            if (container.setPointerCapture) {
                container.setPointerCapture(e.pointerId);
            }
        });

        // 指・ペン・マウスを離したとき
        container.addEventListener("pointerup", (e) => {
            if (!isDragging) return;

            const endX = e.clientX;
            const endY = e.clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            isDragging = false;

            // 縦方向の移動が横方向より大きい場合は
            // 「フリック」と判定しない
            if (Math.abs(deltaY) > Math.abs(deltaX)) {
                return;
            }

            // 50px以上の横移動をフリックとして認識
            const threshold = 50;

            if (Math.abs(deltaX) >= threshold) {
                didSwipe = true;

                if (deltaX < 0) {
                    // 左へフリック → 次のページ
                    goToSlide(currentSlide + 1);
                } else {
                    // 右へフリック → 前のページ
                    goToSlide(currentSlide - 1);
                }
            }
        });

        // pointercancel対策
        container.addEventListener("pointercancel", () => {
            isDragging = false;
            didSwipe = false;
        });

        // PCでの従来のクリック操作も維持
        container.addEventListener("click", (e) => {

            // フリック直後のclickイベントは無視
            if (didSwipe) {
                didSwipe = false;
                return;
            }

            const rect = container.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            if (clickX < rect.width / 3) {
                // 左側 → 前へ
                goToSlide(currentSlide - 1);
            } else {
                // 右側 → 次へ
                goToSlide(currentSlide + 1);
            }
        });
    }

    function handleSwipe() {
        const threshold = 40;
        if (touchStartX - touchEndX > threshold) {
            goToSlide(currentSlide + 1);
        } else if (touchEndX - touchStartX > threshold) {
            goToSlide(currentSlide - 1);
        }
    }

    function renderResultCharts(scores) {

        function calcPercent(
            leftScore,
            rightScore
        ) {
            const total = leftScore + rightScore;
            if (total === 0) {
                return 50;
            }
            return Math.round(
                (rightScore / total) * 100
            );
        }

        const pTI = calcPercent(scores.T, scores.I);
        const pED = calcPercent(scores.E, scores.D);
        const pPG = calcPercent(scores.P, scores.G);
        const pSC = calcPercent(scores.S, scores.C);
        const chartData = [
            {
                title: "原動力",
                left: "保守型(T)",
                right: "変革型(I)",
                percent: pTI,
                groupClass: "bar-group1"
            },
            {
                title: "価値観",
                left: "エンタメ型(E)",
                right: "教訓・哲学型(D)",
                percent: pED,
                groupClass: "bar-group2"
            },
            {
                title: "感情",
                left: "情熱型(P)",
                right: "流麗型(G)",
                percent: pPG,
                groupClass: "bar-group3"
            },
            {
                title: "楽しみ方",
                left: "堪能・咀嚼型(S)",
                right: "勢い・刺激型(C)",
                percent: pSC,
                groupClass: "bar-group4"
            }
        ];

        let chartsHtml = "";

        chartData.forEach(item => {
            let displayTitle = "";
            if (item.percent >= 50) {
                displayTitle = `<span class="${
                    item.groupClass.replace(
                        "bar-",
                        "color-"
                    )
                }">
                    ${item.percent}%
                    ${item.right.split("(")[0]}
                </span>`;
            } else {
                displayTitle = `<span class="${
                    item.groupClass.replace(
                        "bar-",
                        "color-"
                    )
                }">
                    ${100 - item.percent}%
                    ${item.left.split("(")[0]}
                </span>`;
            }
            chartsHtml += `
                <div class="chart-row">
                    <div class="chart-title">
                        ${item.title} : ${displayTitle}
                    </div>

                    <div class="chart-bar-area">
                        <span class="element-label left"
                            ${item.left}
                        </span>

                        <div class="chart-track">
                            <div
                                class="chart-fill ${item.groupClass}"
                                style="width:${item.percent}%;">
                            </div>

                            <div
                                class="chart-dot"
                                style="left:${item.percent}%;">
                            </div>
                        </div>

                        <span class="element-label right">
                            ${item.right}
                        </span>
                    </div>
                </div>
            `;
        });

        document.getElementById(
            "result-charts-container"
        ).innerHTML = chartsHtml;
    }

    /* ===診断結果カードを画像として保存=== */
    let savedResultImageBlob = null;
    async function saveResultCardImage() {
        const originalCard = document.querySelector(".result-card");

        if (!originalCard) {
            alert("診断結果カードを取得できませんでした。");
            return;
        }

        // html2canvas読み込み確認
        if (typeof html2canvas === "undefined") {
            alert("画像保存機能の読み込みに失敗しました。");
            return;
        }

        // 保存ボタン
        const saveButton = document.querySelector(".image-save-main-btn");

        // 保存ボタンを一時的に無効化
        if (saveButton) {
            saveButton.disabled = true;
            saveButton.style.opacity = "0.6";
            saveButton.textContext = "画像を作成中…";
        }

        let clone = null;

        try {
            // 1．結果カードを複製
            clone = originalCard.cloneNode(true);
            clone.id = "result-card-capture";

            // 2．キャプチャ用位置・サイズ
            clone.style.position = "fixed";
            clone.style.left = "-10000px";
            clone.style.top = "0";
            clone.style.width = `${originalCard.offsetWidth}px`;
            clone.style.height = `${originalCard.offsetHeight}px`;
            clone.style.maxHeight = "none";
            clone.style.overflow = "hidden";
            clone.style.transform = "none";

            // ３．2ページ目・3ページ目を非表示
            const page2 = clone.querySelector(".slide-page-2");
            const page3 = clone.querySelector("slide-page-3");
            if (page2) {
                page2.style.display = "none";
            }
            if (page3) {
                page3.style.display = "none";
            }

            // ４．1ページ目だけを表示
            const track = clone.querySelector(".slider-track");
            if (track) {
                track.style.width = "100%";
                track.style.transform = "none";
                track.style.transition = "none";
            }
            const page1 = clone.querySelector(".slide-page-1");
            if (page1) {
                page1.style.width = "100%";
                page1.style.flex = "0 0 100%";
            }

            // ドットは表示
            const dots = clone.querySelector(".dots-container");
            if (dots) {
                dots.style.display = "flex";
            }

            // ５．DOMに追加
            document.body.appendChild(clone);

            // ブラウザ描画待ち
            await new Promise(resolve => {
                requestAnimationFrame(resolve);
            });

            // ６．html2canvasで画像化
            const canvas =
                await html2canvas(clone, {
                    backgroundColor: "#ffffff",
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    imageTimeout: 15000,
                    width: originalCard.offsetWidth,
                    height: originalCard.offsetHeight
                });
                
            // ７．PNG化
            const blob =
                await new Promise(resolve => {
                    canvas.toBlob(
                        resolve,
                        "image/png"
                    );
                });
            if (!blob) {
                throw new Error(
                    "画像データの生成に失敗しました。"
                );
            }

            savedResultImageBlob = blob;

            // ８．ダウンロード
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = createResultImageFileName();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 1000);

            // ９．保存完了メッセージ
            showTemporaryMessage("保存が完了しました");

        } catch (error) {
            console.error(
                "診断結果画像の保存に失敗しました:",
                error
            );
            alert(
                "画像の保存中にエラーが発生しました。\n" +
                "もう一度お試しください。"
            );

        } finally {
            // １０．複製したカードを必ず削除
            if (clone) {
                clone.remove();
            }

            // １１．保存ボタンをもとに戻す
            if (saveButton) {
                saveButton.disabled = false;
                saveButton.style.opacity = "1";
                saveButton.textContent = "画像で保存";
            }
        }
    }

    function createResultImageFileName() {
        const resultNameElement = document.querySelector(".result-type-name");
        const resultName = resultNameElement
            ? resultNameElement.textContent.trim()
            : "診断結果";
        return `バレエタイプ診断_${resultName}.png`;
    }

    /* ===一時メッセージ=== */
    function showTemporaryMessage(message) {
        const existing =
            document.getElementById(
                "temporary-share-message"
            );

        if (existing) {
            existing.remove();
        }

        const messageBox =
            document.createElement("div");
        messageBox.id = "temporary-share-message";
        messageBox.textContent = message;
        document.body.appendChild(
            messageBox
        );
        setTimeout(() => {
            if (messageBox) {
                messageBox.remove();
            }
        }, 1800);
    }

    /* ===結果URLを生成=== */
    function createResultShareUrl() {

        const scores = window.currentDiagnosisScores;

        const resultType =
            document
                .querySelector(".result-type-code")
                ?.textContent
                .replace(/[（）()]/g, "")
                .trim();
        if (!scores || !resultType) {
            return (
                window.location.origin +
                window.location.pathname
            );
        }

        const params = new URLSearchParams();
        params.set("result", resultType);
        params.set("t", scores.T);
        params.set("i", scores.I);
        params.set("e", scores.E);
        params.set("d", scores.D);
        params.set("p", scores.P);
        params.set("g", scores.G);
        params.set("s", scores.S);
        params.set("c", scores.C);

        return (
            window.location.origin +
            window.location.pathname +
            "?" +
            params.toString()
        );
    }

    /* ===結果URLをコピー=== */
    async function copyDiagnosisUrl() {
        const diagnosisUrl = createResultShareUrl();

        try {
            await navigator.clipboard.writeText(
                diagnosisUrl
            );

            showTemporaryMessage(
                "URLをコピーしました"
            );

        } catch (error) {
            const textarea = document.createElement("textarea");
            textarea.value = diagnosisUrl;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();

            try {
                document.execCommand("copy");
                showTemporaryMessage(
                    "URLをコピーしました"
                );

            } catch (fallbackError) {
                alert(
                    "URLをコピーできませんでした。\n\n" +
                    diagnosisUrl
                );
            }

            document.body.removeChild(textarea);
        }
    }

    /* ===Xでシェア=== */
    function shareResultToX() {
        const resultNameElement = document.querySelector(".result-type-name");

        const resultName = resultNameElement
            ? resultNameElement.textContent.trim()
            : "診断結果";

        const resultCodeElement = document.querySelector(".result-type-code");

        const resultCode = resultCodeElement
            ? resultCodeElement.textContent
                .replace(/[（）()]/g, "")
                .trim()
            : "";

        const diagnosisUrl = createResultShareUrl();

        const postText =
            `私のバレエタイプは「${resultName}」でした！\n` +
            `（${resultCode}）\n\n` +
            `みんなは何タイプ？\n` +
            `#バレエタイプ診断`;

        const xWebIntent = "https://x.com/intent/post?" +
            new URLSearchParams({
                text: postText,
                url: diagnosisUrl
            }).toString();

        const xAppUrl = "twitter://post?" +
            new URLSearchParams({
                text: postText,
                url: diagnosisUrl
            }).toString();

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            let appOpened = false;

            const onVisibilityChange = () => {
                if (document.hidden) {
                    appOpened = true;
                    document.removeEventListener(
                        "visibilitychange",
                        onVisibilityChange
                    );
                }
            };

            document.addEventListener(
                "visibilitychange",
                onVisibilityChange
            );

            window.location.href = xAppUrl;

            setTimeout(() => {
                document.removeEventListener(
                    "visibilitychange",
                    onVisibilityChange
                );

                if (!appOpened) {
                    window.location.href = xWebIntent;
                }
            }, 1200);

        } else {
            window.open(
                xWebIntent,
                "_blank",
                "noopener,noreferrer"
            );
        }
    }

    /* ===LINEでシェア=== */
    function shareResultToLINE() {
        const resultNameElement = document.querySelector(".result-type-name");
        const resultName = 
            resultNameElement
                ? resultNameElement.textContent.trim()
                : "診断結果";
        const diagnosisUrl = window.location.origin + window.location.pathname;
        const shareText =
            `私のバレエタイプは「${resultName}」でした！\n` +
            `#バレエタイプ診断\n` +
            diagnosisUrl;
        const lineUrl =
            "https://line.me/R/msg/text/?" +
            encodeURIComponent(shareText);
        window.location.href = lineUrl;
    }

    /* ===Instagramでシェア=== */
    async function shareSavedImageToInstagram() {
        if (!savedResultImageBlob) {
            alert(
                "共有する画像がありません。\n" +
                "先に「画像で保存」を実行してください。"
            );
            return;
        }

        const isAndroid = /Android/i.test(navigator.userAgent);
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isIOS) {
            const instagramAppUrl = "instagram://app";

            let appOpened = false;

            const onVisibilityChange = () => {
                if (document.hidden) {
                    appOpened = true;
                    document.removeEventListener(
                        "visibilitychange",
                        onVisibilityChange
                    );
                }
            };

            document.addEventListener(
                "visibilitychange",
                onVisibilityChange
            );

            window.location.href = instagramAppUrl;

            setTimeout(() => {
                document.removeEventListener(
                    "visibilitychange",
                    onVisibilityChange
                );

                if (!appOpened) {
                    alert(
                        "Instagramアプリを起動できませんでした。\n\n" +
                        "先ほど保存した画像をInstagramから選択して投稿してください。"
                    );
                }
            }, 1200);

            return;
        }

        if (isAndroid) {
            const instagramAppUrl =
                "intent://instagram.com/#Intent;" +
                "package=com.instagram.android;" +
                "scheme=https;" +
                "end";

            window.location.href = instagramAppUrl;

            return;
        }

        window.open(
            "https://www.instagram.com/",
            "_blank",
            "noopener,noreferrer"
        );
    }

    /* ===URLから結果復元=== */
    function loadShareResultFromUrl() {
        const params =
            new URLSearchParams(
                window.location.search
            );
        const resultType =
            params.get("result");
        if (!resultType) {
            return false;
        }

        const validTypes = [
            "TEPS", "TEPC",
            "TEGS", "TEGC",
            "TDPS", "TDPC",
            "TDGS", "TDGC",
            "IEPS", "IEPC",
            "IEGS", "IEGC",
            "IDPS", "IDPC",
            "IDGS", "IDGC"
        ];

        if (!validTypes.includes(resultType)) {
            return false;
        }

        const scores = {
            T: Number(params.get("t")),
            I: Number(params.get("i")),
            E: Number(params.get("e")),
            D: Number(params.get("d")),
            P: Number(params.get("p")),
            G: Number(params.get("g")),
            S: Number(params.get("s")),
            C: Number(params.get("c"))
        };

        const scoreValues = Object.values(scores);

        if (
            scoreValues.some(
                value =>
                    !Number.isFinite(value) ||
                    value < 0
            )
        ) {
            return false;
        }

        renderSharedResult(
            resultType,
            scores
        );

        return true;
    }

    function renderSharedResult(type, scores) {
        window.currentDiagnosisScores = scores;

        const JapaneseTypeName = typeNames[type];

        if (!JapaneseTypeName) {
            return;
        }

        let colorGroup = "";
        if (
            ["TEPS", "TEPC", "IEPS", "IEPC"]
                .includes(type)
        ) {
            colorGroup = "group1";

        } else if (
            ["TEGS", "TEGC", "IEGS", "IEGC"]
                .includes(type)
        ) {
            colorGroup = "group2";

        } else if (
            ["TDPS", "TDPC", "IDPS", "IDPC"]
                .includes(type)
        ) {
            colorGroup = "group3";

        } else if (
            ["TDGS", "TDGC", "IDGS", "IDGC"]
                .includes(type)
        ) {
            colorGroup = "group4";
        }

        const groupDotColors = {
            group1: "#d4a373",
            group2: "#4a90e2",
            group3: "#e76f51",
            group4: "#9b51e0"            
        };

        activeDotColor =
            groupDotColors[colorGroup] ||
            "#333333";

        const bodyBgColors = {
            group1:"rgba(247, 247, 238, 1)",
            group2:"rgba(238, 244, 247, 1)",
            group3:"rgba(247, 238, 238, 1)",
            group4:"rgba(244, 238, 247, 1)"
        };

        const resultContainer =
            document.getElementById(
                "result-screen"
            );

        if (
            resultContainer && bodyBgColors[colorGroup]
        ) {
            resultContainer.style.backgroundColor = bodyBgColors[colorGroup];
        }

        document.getElementById("result").innerHTML = `
            <div class="result-label">
                あなたのタイプは…
            </div>
            
            <div class="result-type-name bg-${colorGroup}">
                ${JapaneseTypeName}
            </div>

            <div class="result-type-code color-"${colorGroup}">
                (${type})
            </div>
        `;

        const resultImg =
            document.getElementById(
                "result-image"
            );
        resultImg.src = `./images/${type}.png`;
        resultImg.style.display = "block";

        renderResultCharts(scores);

        const descriptionBox =
            document.getElementById(
                "result-description-box"
            );
        if (descriptionBox) {
            descriptionBox.innerHTML = typeDescriptions[type];
            descriptionBox.className = "";
            descriptionBox.classList.add(
                `border-${colorGroup}`
            );
        }

        initResultSlider();

        document
            .getElementById("quiz-screen")
            .classList.add("hidden");
        document
            .getElementById("sticky-header")
            .classList.add("hidden");
        document
            .getElementById("result-screen")
            .classList.remove("hidden");

        window.scrollTo(0, 0);
    }

    document.addEventListener(
        "DOMContentLoaded",
        () => {
            loadShareResultFromUrl();
        }
    );
</script>
