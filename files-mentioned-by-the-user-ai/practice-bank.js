(() => {
  const rawQuestions = [
  {
    "number": 1,
    "question": "若要避免深度學習訓練時「忘記」先前學到的任務，需用到何種機制？",
    "answer": "持續學習（Continual Learning）或彈性權重整合（EWC）"
  },
  {
    "number": 2,
    "question": "若在訓練生成對抗網路（GAN）時，發現生成器幾乎產生隨機雜訊，原因可能是？",
    "answer": "生成器未接收到有效梯度訊號，導致學習無法前進"
  },
  {
    "number": 3,
    "question": "如果要在大量文本中自動識別並標註人名、地名、組織名等，該使用何種技術？",
    "answer": "實體識別（Named Entity Recognition, NER）"
  },
  {
    "number": 4,
    "question": "在大規模影像分類中，為何通常需用 GPU 或 TPU？",
    "answer": "大量矩陣運算可在 GPU/TPU 上並行加速訓練"
  },
  {
    "number": 5,
    "question": "使用 CRF（Conditional Random Field）較常出現在下列哪種任務中？",
    "answer": "命名實體識別（NER）或序列標註"
  },
  {
    "number": 6,
    "question": "在強化學習中，若希望演算法同時能處理離散與連續動作空間，可以怎麼做？",
    "answer": "使用混合策略或分層 RL，分離離散決策與連續控制"
  },
  {
    "number": 7,
    "question": "哪種資料型態最適合使用 CNN 網路結構來處理？",
    "answer": "圖片或影片等網格狀資料"
  },
  {
    "number": 8,
    "question": "在 Python 進行機器學習時，若要讀取並操作大型 DataFrame，哪個套件最常用？",
    "answer": "Pandas"
  },
  {
    "number": 9,
    "question": "資料探勘中的「關聯規則學習」常用於什麼情境？",
    "answer": "尋找項目（商品）之間的共同出現關係，如購物籃分析"
  },
  {
    "number": 10,
    "question": "在語音識別中，CTC（Connectionist Temporal Classification）有何用處？",
    "answer": "幫助在無對齊標註的情況下訓練序列到序列模型"
  },
  {
    "number": 11,
    "question": "若我們用太小的 batch size 進行訓練，可能遇到什麼狀況？",
    "answer": "訓練穩定性差，損失抖動較大"
  },
  {
    "number": 12,
    "question": "若要測試分類模型在多個不平衡資料集上的整體表現，哪個指標較適合？",
    "answer": "平均精確率與平均召回率（macro-average Precision & Recall）"
  },
  {
    "number": 13,
    "question": "為何有些生成式模型會透過「自注意力」來同時關注序列的不同部分？",
    "answer": "讓模型可在同一層面考慮序列各位置，捕捉上下文關係"
  },
  {
    "number": 14,
    "question": "在語音合成任務中，Tacotron 與 WaveNet 各自扮演何種角色？",
    "answer": "Tacotron 用於文本到聲學特徵，WaveNet 用於聲學特徵到原始波形生成"
  },
  {
    "number": 15,
    "question": "何謂「No-Free-Lunch 定理」在機器學習中的含意？",
    "answer": "所有演算法平均起來表現相同，無法依賴單一算法通吃所有任務"
  },
  {
    "number": 16,
    "question": "下列哪一種方法可用於判斷一個回歸模型是否存在多重共線性問題？",
    "answer": "VIF（Variance Inflation Factor）"
  },
  {
    "number": 17,
    "question": "在大型資料處理管線中，若原數據持續產出且無限流入，哪種架構可用於即時處理？",
    "answer": "流處理（Stream Processing）"
  },
  {
    "number": 18,
    "question": "在梯度下降優化中，若使用 Adam，與純粹的 SGD 相比，多了什麼機制？",
    "answer": "記錄一階與二階動量，自適應調整學習率"
  },
  {
    "number": 19,
    "question": "當資料屬於時間序列且有趨勢與季節性因素，最常用哪種方法來做預測？",
    "answer": "ARIMA 或 SARIMA"
  },
  {
    "number": 20,
    "question": "對話機器人若想理解用戶意圖並填充槽位（slot），可使用下列哪種技術？",
    "answer": "序列標註（如 BiLSTM+CRF）"
  },
  {
    "number": 21,
    "question": "若想訓練一個生成模型，學習一組資料的機率分佈，哪種方法不屬於此範疇？",
    "answer": "邏輯迴歸"
  },
  {
    "number": 22,
    "question": "在多層感知器（MLP）裡，如果使用 sigmoid 作為隱藏層激活，在哪種情況下易出現梯度消失？",
    "answer": "輸入絕對值過大時"
  },
  {
    "number": 23,
    "question": "若想衡量一個語言模型在填空或選字上的準確度，常用哪種指標？",
    "answer": "Perplexity（困惑度）"
  },
  {
    "number": 24,
    "question": "假設你在執行一個語音辨識專案，但音檔品質差，出現多種背景雜訊，可以考慮哪種處理方法？",
    "answer": "語音增強（Speech Enhancement）或雜訊過濾演算法"
  },
  {
    "number": 25,
    "question": "在做主成分分析（PCA）時，常希望前幾個主成分能解釋資料的多少變異量？",
    "answer": "90%～95%以上"
  },
  {
    "number": 26,
    "question": "下列哪一種技術無法直接用於提高分類模型的泛化能力？",
    "answer": "Gradient Clipping"
  },
  {
    "number": 27,
    "question": "在資料可視化時，若想同時顯示兩個變數間的關係以及個別分佈，最合適的圖是什麼？",
    "answer": "Scatter Plot + Marginal Histograms（散佈圖+邊際直方圖）"
  },
  {
    "number": 28,
    "question": "在資料標準化中，常見的 Z-score Normalization 公式是什麼？",
    "answer": "(x - mean) / std"
  },
  {
    "number": 29,
    "question": "「CRISP-DM」是一種常見的方法論，主要針對哪個領域？",
    "answer": "數據挖掘與資料科學專案流程"
  },
  {
    "number": 30,
    "question": "當處理連續特徵（如溫度、年齡）時，若要將其轉成離散類別，常用的方式是什麼？",
    "answer": "Binning（分箱）"
  },
  {
    "number": 31,
    "question": "如果想檢測「是否存在數據偏見」，例如某群體在模型中被系統性地低估或高估，可用什麼工具？",
    "answer": "AI Fairness 360 或公平性檢測框架"
  },
  {
    "number": 32,
    "question": "假設你要做跨領域資料分析，需要先理解該領域專有名詞與業務邏輯，這屬於哪個步驟？",
    "answer": "業務理解（Business Understanding）"
  },
  {
    "number": 33,
    "question": "對於多個輸入來源（如影像+文字）的多模態學習（Multimodal Learning），下列敘述何者正確？",
    "answer": "需要設計可融合不同模式特徵的網路結構"
  },
  {
    "number": 34,
    "question": "在 ML 專案中，若要縮短開發流程並自動化重複工作，常使用哪種方法論？",
    "answer": "MLOps"
  },
  {
    "number": 35,
    "question": "哪一項技術可用於檢測神經網路模型的可解釋性？",
    "answer": "Class Activation Map（CAM）"
  },
  {
    "number": 36,
    "question": "何謂「資料漂移（Data Drift）」？",
    "answer": "測試數據和訓練數據的分佈隨時間改變，造成模型失效"
  },
  {
    "number": 37,
    "question": "若想讓模型在多語言文本上皆可處理並生成內容，常用的方法是什麼？",
    "answer": "使用多語言預訓練模型（Multilingual Model）"
  },
  {
    "number": 38,
    "question": "NLP 中處理中文斷詞的主要挑戰是什麼？",
    "answer": "中文缺乏顯式空格且存在多義性"
  },
  {
    "number": 39,
    "question": "如果分類任務中，假陽性（False Positive）成本極高（如醫療誤判），應該優先提高哪個指標？",
    "answer": "精確率（Precision）"
  },
  {
    "number": 40,
    "question": "如果我們在迴歸任務中觀察到訓練損失穩定下降，但驗證損失開始上升，表示什麼現象？",
    "answer": "過擬合"
  },
  {
    "number": 41,
    "question": "在多頭注意力中，每個頭會使用獨立的投影矩陣學習不同的注意力子空間，這樣做的好處是？",
    "answer": "從不同角度捕捉多元關係，增強模型表達能力"
  },
  {
    "number": 42,
    "question": "哪個方法可用於生成式模型在影像領域的「風格遷移（Style Transfer）」？",
    "answer": "CNN 梯度反傳，優化內容損失與風格損失"
  },
  {
    "number": 43,
    "question": "在資料分析中，常利用「t-SNE」來做什麼？",
    "answer": "將高維資料可視化到 2D 或 3D，凸顯叢集或結構"
  },
  {
    "number": 44,
    "question": "在 CNN 中，使用池化（Pooling）層的主要目的是什麼？",
    "answer": "降低特徵圖維度並保留關鍵特徵"
  },
  {
    "number": 45,
    "question": "在關係式資料庫中，常使用 SQL 進行查詢；若要做大規模平行運算與容錯，可考慮哪種架構？",
    "answer": "Hadoop + Hive 或 Spark SQL"
  },
  {
    "number": 46,
    "question": "在生產環境中，若想監測模型性能是否隨時間下降，應該做什麼？",
    "answer": "設計模型監控指標，如預測分佈、真實回饋、資料漂移"
  },
  {
    "number": 47,
    "question": "在決策樹學習中，常見的分裂指標不包含下列哪一個？",
    "answer": "卡方檢定"
  },
  {
    "number": 48,
    "question": "當我們在偵測資料中的離群點時，若無法取得標籤，哪種學習方式最常見？",
    "answer": "非監督式學習（如密度、距離或聚類方法）"
  },
  {
    "number": 49,
    "question": "下列何者屬於聯邦學習的核心挑戰？",
    "answer": "需要在數據不互相交換的情況下協同訓練，且通訊與隱私保護成本高"
  },
  {
    "number": 50,
    "question": "何謂「Data Lake」在大數據架構中的角色？",
    "answer": "儲存各種原始格式與結構的資料供後續探索"
  },
  {
    "number": 51,
    "question": "當要在推薦系統中避免「過度專一」的推薦（過濾泡泡），可採用何種策略？",
    "answer": "強化多樣性或新穎性"
  },
  {
    "number": 52,
    "question": "在多層感知器（MLP）中，若使用 ReLU 激活函數，該函數的特點是什麼？",
    "answer": "f(x) = max(0, x)"
  },
  {
    "number": 53,
    "question": "假設某分類任務的資料非常不平衡，若希望在少數類上更準，可以怎麼調整？",
    "answer": "使用權重調整或懲罰策略，使少數類的錯誤成本更高"
  },
  {
    "number": 54,
    "question": "在機器學習專案的「資料理解」階段，常做哪項工作？",
    "answer": "進行探索性資料分析（EDA），瞭解各特徵分佈、異常值、相依性等"
  },
  {
    "number": 55,
    "question": "在大型企業的資料治理中，「資料血緣（Data Lineage）」的重要性為何？",
    "answer": "追溯數據來源、轉換流程與去向，確保合規與可追溯"
  },
  {
    "number": 56,
    "question": "資料中存在高度相關的特徵時，哪項方法能幫助降低冗餘？",
    "answer": "PCA 或其他降維方法"
  },
  {
    "number": 57,
    "question": "當用於非結構化文本資料，若需快速查看關鍵字或模式，可考慮使用？",
    "answer": "正則表達式（Regex）或簡易文本搜尋"
  },
  {
    "number": 58,
    "question": "若要在深度學習中實現「注意力機制」，下列哪個概念必不可少？",
    "answer": "餘弦相似度或點積相似度用於計算 Query 與 Key 的相容度"
  },
  {
    "number": 59,
    "question": "當應用生成式 AI（如 GPT）回應使用者文本時，若要控制文本創造力與隨機度，通常調整哪個參數？",
    "answer": "Top-K / Top-P 或 Temperature"
  },
  {
    "number": 60,
    "question": "如果訓練集和測試集的資料分佈有明顯差異，模型可能遇到哪種問題？",
    "answer": "Dataset Shift（資料分佈偏移）"
  },
  {
    "number": 61,
    "question": "在深度學習中，「激活函數飽和區域」指的是什麼？",
    "answer": "輸入太大或太小，導致函數梯度趨近於 0，更新效能差"
  },
  {
    "number": 62,
    "question": "在行動端部署 AI 時，為何常使用模型壓縮或量化？",
    "answer": "行動裝置資源有限，需要減小模型大小與計算量"
  },
  {
    "number": 63,
    "question": "何謂資料探勘（Data Mining）的核心目的？",
    "answer": "發現數據中隱含的模式與規則"
  },
  {
    "number": 64,
    "question": "如何判斷深度學習模型是否「欠擬合（underfitting）」？",
    "answer": "訓練誤差與測試誤差都很高"
  },
  {
    "number": 65,
    "question": "對資料進行標準化或正規化時，為何需要使用「在訓練集算出的統計量」，並將其應用在測試集？",
    "answer": "確保測試集不洩漏未見資料分佈，模擬真實預測環境"
  },
  {
    "number": 66,
    "question": "提升機（Boosting）演算法中，Adaboost 與 Gradient Boosting 的主要差異在哪裡？",
    "answer": "Adaboost 基於調整樣本權重，而 Gradient Boosting 基於梯度殘差"
  },
  {
    "number": 67,
    "question": "在語音辨識流程中，常見的「特徵提取」步驟是什麼？",
    "answer": "計算 Mel 頻譜倒譜係數（MFCC）或 FBank"
  },
  {
    "number": 68,
    "question": "在推薦系統中，若用戶行為非常稀疏，哪種技巧可用來彌補？",
    "answer": "收集用戶更多瀏覽、搜尋、點擊等隱式反饋"
  },
  {
    "number": 69,
    "question": "哪一種正則化技術可同時鼓勵權重稀疏化並控制權重大小？",
    "answer": "L1 正則化（Lasso）"
  },
  {
    "number": 70,
    "question": "哪個方法最能凸顯決策樹模型結構與決策過程，提升可解釋度？",
    "answer": "將決策樹視覺化為樹形圖"
  },
  {
    "number": 71,
    "question": "在 CNN 處理影像時，常使用 Padding 的原因是？",
    "answer": "在卷積時保留邊界資訊，避免尺寸過度縮減"
  },
  {
    "number": 72,
    "question": "在資料分割時常提到「stratified sampling」，其特點是什麼？",
    "answer": "確保各類別在抽樣後的比例與原數據一致"
  },
  {
    "number": 73,
    "question": "哪一類技術可讓已部署的深度學習模型在使用者端進行推理時，減少隱私風險？",
    "answer": "聯邦學習（Federated Learning）"
  },
  {
    "number": 74,
    "question": "在處理多標籤分類（multi-label classification）時，哪一種評估指標可同時考量多個標籤的預測？",
    "answer": "Hamming Loss"
  },
  {
    "number": 75,
    "question": "哪一個資料庫系統屬於 NoSQL，擅長處理關鍵值對（key-value）的高頻讀寫？",
    "answer": "Redis"
  },
  {
    "number": 76,
    "question": "在偏差-變異（bias-variance）分解中，若模型偏差高，表示什麼？",
    "answer": "模型在訓練與測試上均表現不佳"
  },
  {
    "number": 77,
    "question": "在資料分析中，若想根據篩選條件動態更新可視化，使用者可與圖表互動，適合哪種工具？",
    "answer": "Excel 樞紐分析或 BI 工具（如 Tableau、Power BI）"
  },
  {
    "number": 78,
    "question": "機器學習中的「留一交叉驗證（LOOCV）」有何特點？",
    "answer": "每次只拿一筆資料做測試，其他全部做訓練"
  },
  {
    "number": 79,
    "question": "在深度學習專案中，若要快速測試不同超參數組合，可使用哪一個工具或技術？",
    "answer": "Hyperparameter Tuning（如 Random Search、Bayesian Optimization）"
  },
  {
    "number": 80,
    "question": "在 Python 裡，若要處理大量數值計算並搭配陣列操作，何者為基礎庫？",
    "answer": "NumPy"
  },
  {
    "number": 81,
    "question": "在視覺任務中，ResNet 引入殘差塊（Residual Block）的主要目的為何？",
    "answer": "提高網路深度時仍能有效訓練，減少梯度消失"
  },
  {
    "number": 82,
    "question": "如何檢測線性迴歸中的殘差是否呈現隨機分佈？",
    "answer": "觀察殘差圖，若無明顯模式或趨勢即隨機分佈"
  },
  {
    "number": 83,
    "question": "使用「早期停止（Early Stopping）」可以帶來什麼好處？",
    "answer": "在驗證集表現開始惡化時停止訓練，防止過擬合"
  },
  {
    "number": 84,
    "question": "在機器翻譯中，若使用 Encoder-Decoder 架構並引入注意力機制，稱為什麼？",
    "answer": "Seq2Seq + Attention"
  },
  {
    "number": 85,
    "question": "在 MLOps 流程中，「持續訓練（Continuous Training）」意義為何？",
    "answer": "當新數據進入系統時，自動更新模型，使其保持最新"
  },
  {
    "number": 86,
    "question": "如果我們想同時在多個 GPU 上並行訓練一個神經網路，常採用什麼作法？",
    "answer": "數據並行（Data Parallelism）"
  },
  {
    "number": 87,
    "question": "模型若在測試集表現優異，但在真實環境中效果不佳，可能原因是？",
    "answer": "高度配合了測試集，但測試集不具代表性"
  },
  {
    "number": 88,
    "question": "在強化學習中，若採用 Off-Policy 演算法，如 Q-learning，代表什麼？",
    "answer": "採集資料的策略與實際學習的策略可以不同"
  },
  {
    "number": 89,
    "question": "在多分類問題中，哪一種損失函數最常使用？",
    "answer": "交叉熵（Cross-Entropy）"
  },
  {
    "number": 90,
    "question": "如果需要在嵌入式環境（如微控制器）上執行推理，應考慮什麼做法？",
    "answer": "模型剪枝、量化、知識蒸餾"
  },
  {
    "number": 91,
    "question": "若企業想建立「數據湖（Data Lake）」以保存各種類型原始數據，此舉目的為何？",
    "answer": "提供後續多種分析可能，不需一開始就做嚴格結構化"
  },
  {
    "number": 92,
    "question": "假設你要將不同來源的結構化與非結構化資料整合，以便後續大數據分析，該使用哪種系統最適合？",
    "answer": "Hadoop/HDFS + Spark 等大數據生態系統"
  },
  {
    "number": 93,
    "question": "在加速推理時，若使用「TensorRT」或「OpenVINO」之類的優化工具，通常可以做什麼？",
    "answer": "進行層融合、算子最佳化或低精度運算"
  },
  {
    "number": 94,
    "question": "在搜尋引擎中，若要根據使用者查詢詞，快速找出可能相關的文件，哪一種索引結構最常使用？",
    "answer": "倒排索引（Inverted Index）"
  },
  {
    "number": 95,
    "question": "在複雜模型部署時，使用容器化（如 Docker、Kubernetes）有何優點？",
    "answer": "提供一致的運行環境，便於部署與擴展"
  },
  {
    "number": 96,
    "question": "在分散式訓練中，參數伺服器（Parameter Server）模式的功能是什麼？",
    "answer": "儲存並統一更新模型參數"
  },
  {
    "number": 97,
    "question": "在影像增強的同時，若想確保對應的標籤（例如 bounding box）也能同步變換，稱作什麼？",
    "answer": "幾何一致性增強（Geometric Consistency）"
  },
  {
    "number": 98,
    "question": "在視覺題材中，若要同時輸出像素級分類結果並區分不同目標（物件實例），可用什麼技術？",
    "answer": "實例分割（Instance Segmentation）"
  },
  {
    "number": 99,
    "question": "當想進行大規模分散式訓練，哪一種並行方式會將不同的網路層分配到不同裝置上？",
    "answer": "Pipeline Parallelism（管線並行）"
  },
  {
    "number": 100,
    "question": "在貝葉斯分類器中，若假設特徵相互獨立，便是什麼模型？",
    "answer": "Naive Bayes"
  },
  {
    "number": 101,
    "question": "使用 CNN 時，「過參數化」可能產生什麼問題？",
    "answer": "模型尺寸過大且可能過擬合"
  },
  {
    "number": 102,
    "question": "若在生成對抗網路（GAN）訓練時，鑑別器快速達到很高準確率，可能的原因是？",
    "answer": "生成器尚未學到有用模式，導致鑑別器易辨別真偽"
  },
  {
    "number": 103,
    "question": "哪一種網路架構最常用於影像語義分割（Semantic Segmentation）？",
    "answer": "FCN（Fully Convolutional Network）或 U-Net"
  },
  {
    "number": 104,
    "question": "在深度學習網路訓練時，什麼情況下通常會使用 Batch Normalization？",
    "answer": "訓練時發生梯度消失或梯度爆炸時"
  },
  {
    "number": 105,
    "question": "當建構時間序列預測模型時，若資料中「自相關性」很強，表示什麼？",
    "answer": "過去數值能很好地解釋未來的變動趨勢"
  },
  {
    "number": 106,
    "question": "在機器學習專案中，若我們將訓練資料重複多遍以增加迭代次數，這個過程稱為？",
    "answer": "Epoch（訓練輪次）"
  },
  {
    "number": 107,
    "question": "在大規模推薦系統中，為何會使用嵌入向量（Embedding）？",
    "answer": "方便將稀疏的用戶-物品交互轉為稠密向量"
  },
  {
    "number": 108,
    "question": "在自然語言處理中，若要同時產生「對話內容」及「動作指令」，可用哪種方式處理？",
    "answer": "多任務學習（Multi-Task Learning）"
  },
  {
    "number": 109,
    "question": "在 CNN 裡，kernel（卷積核）的作用是什麼？",
    "answer": "提取局部空間特徵"
  },
  {
    "number": 110,
    "question": "在自然語言處理任務中，若要進行「情感分析」，最常輸出什麼？",
    "answer": "預測輸入句子的情感極性（正面/負面等）"
  },
  {
    "number": 111,
    "question": "「Q-learning」是一種離線策略，表示什麼？",
    "answer": "可使用與當前策略不同的行動來更新 Q 值"
  },
  {
    "number": 112,
    "question": "在資料科學團隊中，若想保證程式碼版本與資料流程可重現，應該使用什麼工具？",
    "answer": "Git 版控與資料版本管理"
  },
  {
    "number": 113,
    "question": "在非監督式異常偵測中，哪個方法能依靠資料密度判斷異常分佈？",
    "answer": "DBSCAN"
  },
  {
    "number": 114,
    "question": "當建構文本生成模型時，若要避免在翻譯或對話中重複不斷生成相同詞句，可怎麼改善？",
    "answer": "引入重複懲罰（penalty）或調整 Temperature/Top-K"
  },
  {
    "number": 115,
    "question": "在資料標籤時，如果多位標註員對同一筆資料標籤結果不一致，應如何處理？",
    "answer": "記錄爭議並採用多數決或加權平均策略"
  },
  {
    "number": 116,
    "question": "在資料科學專案中，若要進行分散式叢集計算並涵蓋多種語言 API，哪個大數據引擎是常見選擇？",
    "answer": "Spark"
  },
  {
    "number": 117,
    "question": "「機器人手臂的路徑規劃」常用哪種 AI 方法？",
    "answer": "強化學習或運籌路徑搜尋"
  },
  {
    "number": 118,
    "question": "為何 XGBoost 在參與比賽時表現往往很好？",
    "answer": "集成樹方法對各種資料適應性強，且有許多正則與調參技巧"
  },
  {
    "number": 119,
    "question": "在語音辨識或對話系統中，如果希望能動態調整答案的長度與邏輯，常用什麼解碼策略？",
    "answer": "Beam Search（集束搜尋）"
  },
  {
    "number": 120,
    "question": "詞嵌入與字嵌入在中文 NLP 領域各有特色，下列何者正確？",
    "answer": "字嵌入可處理未登入詞與新詞，詞嵌入需完整詞典，但能直接捕捉詞級語意"
  },
  {
    "number": 121,
    "question": "哪種技術能用於優化神經網路結構，以找到較佳的超參數組合？",
    "answer": "強化學習式的 Neural Architecture Search（NAS）"
  },
  {
    "number": 122,
    "question": "在深度學習套件中，TensorFlow 與 PyTorch 最大的差異之一是？",
    "answer": "PyTorch 使用動態計算圖，TensorFlow（早期）使用靜態計算圖"
  },
  {
    "number": 123,
    "question": "在推薦系統中，若想同時考慮「用戶歷史行為」及「內容特徵」，稱為什麼方法？",
    "answer": "混合過濾（Hybrid）"
  },
  {
    "number": 124,
    "question": "在機器學習演算法比較中，如果想避免演算法對超參數特別敏感，可怎麼進行公正比較？",
    "answer": "使用最佳調參（Grid/Random/Bayesian）方法，盡量找各演算法最佳配置"
  },
  {
    "number": 125,
    "question": "在計算機視覺的資料擴增中，除了水平翻轉、隨機裁切，還可做什麼？",
    "answer": "灰度轉換、旋轉、顏色抖動等"
  },
  {
    "number": 126,
    "question": "在 NLP 中，常見的「詞向量」模型不包括哪一個？",
    "answer": "One-Hot"
  },
  {
    "number": 127,
    "question": "在資料庫領域，OLAP 與 OLTP 差異是什麼？",
    "answer": "OLAP 適合報表與多維分析，OLTP 重視交易效率"
  },
  {
    "number": 128,
    "question": "針對使用者輸入「口語化」文字（帶有錯字、縮寫等），哪種 NLP 步驟可先行處理？",
    "answer": "文字正規化（Text Normalization）或拼字校正"
  },
  {
    "number": 129,
    "question": "哪項是衡量一個分群結果好壞的常見指標？",
    "answer": "Silhouette Score（輪廓係數）"
  },
  {
    "number": 130,
    "question": "何謂「蒸餾知識（Knowledge Distillation）」中的 Teacher-Student 架構？",
    "answer": "大模型（Teacher）指導小模型（Student）學習，大幅縮小模型規模"
  },
  {
    "number": 131,
    "question": "隨機森林在每棵樹訓練時，會對資料與特徵做什麼操作？",
    "answer": "Bootstrap 重抽樣資料 + 隨機挑選部分特徵"
  },
  {
    "number": 132,
    "question": "若要在圖像中標記多個關鍵點（如人臉五官定位），多用哪種深度學習方法？",
    "answer": "關鍵點檢測（Keypoint Detection），如使用 CNN + 回歸座標"
  },
  {
    "number": 133,
    "question": "在非監督的詞向量學習（如 Word2Vec），模型學到的是？",
    "answer": "詞與詞之間的共現或語意相似度"
  },
  {
    "number": 134,
    "question": "如果要估計兩個變數之間的線性相關程度，哪一種統計指標最常見？",
    "answer": "皮爾森相關係數（Pearson's r）"
  },
  {
    "number": 135,
    "question": "在 CNN 設計時，若使用太多全連接層有什麼缺點？",
    "answer": "參數量暴增，易過擬合，推理慢"
  },
  {
    "number": 136,
    "question": "哪個概念可描述一個神經網路為了在不同裝置或應用中運行，而進行特定優化與封裝的過程？",
    "answer": "模型可移植性（Model Portability）"
  },
  {
    "number": 137,
    "question": "何謂「蒸餾（Distillation）」在深度學習模型中的用途？",
    "answer": "讓大模型的知識轉移到小模型上"
  },
  {
    "number": 138,
    "question": "假設我們想將一張 RGB 圖片輸入 CNN，常見的輸入張量形狀為哪種？",
    "answer": "(樣本數, 頻道數, 高度, 寬度) 或 (樣本數, 高度, 寬度, 頻道數)"
  },
  {
    "number": 139,
    "question": "有一個網路結構連續堆疊多個 Multi-Head Self-Attention 和 Feed-Forward 子層，且每層都有殘差連接與 LayerNorm，這是典型的什麼架構？",
    "answer": "Transformer Encoder"
  },
  {
    "number": 140,
    "question": "如果模型在訓練過程中損失函數震盪劇烈，最可能的原因是什麼？",
    "answer": "學習率過高"
  },
  {
    "number": 141,
    "question": "針對使用者輸入的隱私數據（例如醫療文本），若欲在雲端進行 NLP 模型推理卻保護機密，可用什麼方法？",
    "answer": "差分隱私或同態加密"
  },
  {
    "number": 142,
    "question": "以下何者最有助於解決「多任務學習」中的負遷移問題？",
    "answer": "謹慎設計任務相關性，並調整共享層與專用層"
  },
  {
    "number": 143,
    "question": "哪一項技術有助於神經網路在推理時進行「動態深度」？",
    "answer": "Skip Connection"
  },
  {
    "number": 144,
    "question": "假設你的語音識別模型在特定口音上表現很差，可以怎麼改善？",
    "answer": "收集或增強特定口音的語音數據，重新訓練或微調"
  },
  {
    "number": 145,
    "question": "在資料清洗時，如果發現某連續特徵出現極端離群值，哪種策略可能使用？",
    "answer": "使用箱型圖（Box Plot）法則或百分位數裁剪進行截尾處理（winsorization）"
  },
  {
    "number": 146,
    "question": "在 GPU 上訓練深度學習模型時，哪個因素對訓練速度影響最大？",
    "answer": "GPU 計算核心數量與記憶體帶寬"
  },
  {
    "number": 147,
    "question": "何謂「可解釋強化學習」？",
    "answer": "在決策過程中提供能解釋為何選擇某行動的證據，以利人類信任"
  },
  {
    "number": 148,
    "question": "在深度學習框架中，若採用動態計算圖（dynamic graph）來建構模型，代表哪種特性？",
    "answer": "模型結構在執行期間可根據條件改變"
  },
  {
    "number": 149,
    "question": "哪種神經網路層可捕捉序列中前後遠距離依賴關係？",
    "answer": "RNN 或 Transformer"
  },
  {
    "number": 150,
    "question": "假設我們想同時最小化模型大小與推理時間，哪種壓縮技術可以考慮？",
    "answer": "模型剪枝（Pruning）"
  },
  {
    "number": 151,
    "question": "何謂「One-Class SVM」？",
    "answer": "專門偵測只有一個類別資料的偏差點或異常值"
  },
  {
    "number": 152,
    "question": "在強化學習中，「探索」與「利用」的平衡意義為何？",
    "answer": "同時嘗試新策略並利用已知最佳行動，防止過早陷入局部最佳"
  },
  {
    "number": 153,
    "question": "何謂「GRU（Gated Recurrent Unit）」在 RNN 中的主要貢獻？",
    "answer": "透過更新門與重置門簡化 LSTM 結構，減少參數"
  },
  {
    "number": 154,
    "question": "當構建一個推薦模型時，使用「矩陣分解」最主要的假設是？",
    "answer": "用戶-物品評分矩陣能透過較低維度的隱向量近似"
  },
  {
    "number": 155,
    "question": "若要保證神經網路輸入圖像亮度、對比度或視角稍微變化時，模型仍能辨識，常使用哪項技巧？",
    "answer": "Data Augmentation"
  },
  {
    "number": 156,
    "question": "若想讓模型能夠在推理時對某些不確定輸入說「我不確定」，可行作法是？",
    "answer": "使用 Bayesian Neural Network 或設置置信區間機制"
  },
  {
    "number": 157,
    "question": "假設你在進行一個 NLP 專案，需要同時處理分類與序列標註，可採用下列哪種思路？",
    "answer": "多任務學習（MTL），共用部分參數，輸出層分離"
  },
  {
    "number": 158,
    "question": "哪一種強化學習方法最常用於解決連續動作空間問題？",
    "answer": "Policy Gradient（策略梯度）"
  },
  {
    "number": 159,
    "question": "在遷移學習中，通常會怎麼處理已預訓練模型的參數？",
    "answer": "部分微調模型參數"
  },
  {
    "number": 160,
    "question": "何謂「過度抽樣（Oversampling）」在不平衡資料集中常用的方法？",
    "answer": "隨機複製少數類樣本"
  },
  {
    "number": 161,
    "question": "在大型語言模型的訓練中，「teacher forcing」指的是什麼？",
    "answer": "在訓練 RNN 時，每一步驟都使用真實標籤作為下一步的輸入，而非模型本身的預測"
  },
  {
    "number": 162,
    "question": "在 RNN（或 LSTM）訓練中，常出現梯度消失問題，哪種方法可用於改善？",
    "answer": "使用殘差連接或引入 GRU/LSTM 門控機制"
  },
  {
    "number": 163,
    "question": "為何在大型語言模型中，預處理常會移除多餘空格、HTML 標籤等雜訊？",
    "answer": "確保模型專注於有意義的文本訊息，減少不必要干擾"
  },
  {
    "number": 164,
    "question": "在大規模語言模型中，常提到的「多頭注意力（Multi-Head Attention）」有何作用？",
    "answer": "將注意力分成多個子空間，以捕捉不同表徵"
  },
  {
    "number": 165,
    "question": "哪種神經網路結構適合於即時地生成文本，並且可逐字進行預測？",
    "answer": "遞歸神經網路（RNN）或 Transformer 自迴歸機制"
  },
  {
    "number": 166,
    "question": "在可解釋 AI 中，哪種技術可比較不同特徵對模型預測的重要性？",
    "answer": "SHAP（SHapley Additive exPlanations）"
  },
  {
    "number": 167,
    "question": "若要使模型判斷「圖片中是否含有目標物件，並在圖上框出其位置」，稱為什麼任務？",
    "answer": "目標檢測（Object Detection）"
  },
  {
    "number": 168,
    "question": "如果模型要同時預測多個值，而每個維度都需要回歸，稱為什麼任務？",
    "answer": "多元迴歸（Multi-output Regression）"
  },
  {
    "number": 169,
    "question": "當在執行「One-Hot Encoding」時，若類別數非常多，可能的缺點是？",
    "answer": "特徵維度急劇上升"
  },
  {
    "number": 170,
    "question": "當研究對象是圖結構資料（Nodes & Edges），哪種模型較適合？",
    "answer": "Graph Neural Network（GNN）"
  },
  {
    "number": 171,
    "question": "在大型語言模型中常提到的「語言漂移（Language Drift）」是什麼？",
    "answer": "模型在對話過程中產生越來越不連貫或偏離預期的語言輸出"
  },
  {
    "number": 172,
    "question": "深度強化學習中常用「Experience Replay」的目的為何？",
    "answer": "隨機取樣過往經驗，降低樣本間的相關性，提升訓練穩定度"
  },
  {
    "number": 173,
    "question": "在可解釋 AI 領域，「局部可解釋模型（LIME）」的理念是？",
    "answer": "在預測點附近用一個簡單模型近似複雜模型，解釋單筆預測"
  },
  {
    "number": 174,
    "question": "何謂「Imbalanced Learning（不平衡學習）」最主要的困境？",
    "answer": "多數類占比極高，少數類幾乎被忽視，造成模型難以識別少數類"
  },
  {
    "number": 175,
    "question": "為何在使用深度學習時，需要大量標註數據？",
    "answer": "深度模型參數多，若無足夠資料支撐，易過擬合"
  },
  {
    "number": 176,
    "question": "在影像超解析度（Super-Resolution）領域，哪種生成式技術常被使用？",
    "answer": "Generative Adversarial Network（GAN）"
  },
  {
    "number": 177,
    "question": "下列哪項技術最常用於大規模語料的文本預訓練？",
    "answer": "Transformer 架構"
  },
  {
    "number": 178,
    "question": "在部署產業級 AI 系統時，若對模型執行結果有合規要求，須注重哪一面向？",
    "answer": "模型解釋性與可追溯性，以及資料隱私合規"
  },
  {
    "number": 179,
    "question": "為何「Batch Normalization」在推理階段會使用移動平均計算的均值與方差？",
    "answer": "因為推理階段不再更新參數，需要固定統計量"
  },
  {
    "number": 180,
    "question": "在文檔檢索系統中，計算查詢與文檔相似度的傳統方法不包括下列哪一項？",
    "answer": "卷積層"
  },
  {
    "number": 181,
    "question": "若想讓神經網路自行學習哪些特徵要保留、哪些要忽略，並在某些位置跳躍，哪種機制可實現？",
    "answer": "Gate（門機制）"
  },
  {
    "number": 182,
    "question": "在資料庫中使用索引可加速查詢，若要在大資料系統中搜索含有特定關鍵字的文本，通常可用哪一種資料結構？",
    "answer": "Inverted Index（倒排索引）"
  },
  {
    "number": 183,
    "question": "深度學習可解決許多複雜任務，但在工業場域導入時，哪個限制因素常最先被考量？",
    "answer": "計算資源與推理延遲成本"
  },
  {
    "number": 184,
    "question": "對資料進行隱私保護時，若想保證任何單一樣本對統計結果影響有限，通常用哪種技術？",
    "answer": "差分隱私（Differential Privacy）"
  },
  {
    "number": 185,
    "question": "在機器學習專案中，若計算資源有限又想測試多種模型，哪種做法較有效率？",
    "answer": "先使用較小資料集或較短訓練回合快速篩選潛力模型，再集中資源深入訓練"
  },
  {
    "number": 186,
    "question": "在 GAN 訓練中，若出現模式崩塌（Mode Collapse），生成器會出現什麼現象？",
    "answer": "只生成少數模式，導致缺乏多樣性"
  },
  {
    "number": 187,
    "question": "在機器學習中，若資料特徵間量級差異很大，會帶來什麼問題？",
    "answer": "訓練收斂困難，某些特徵被過度主導"
  },
  {
    "number": 188,
    "question": "在計算機視覺中，Batch Normalization 常放在哪裡？",
    "answer": "在捲積或全連接層後、激活函數前（或後），以穩定分佈"
  },
  {
    "number": 189,
    "question": "若多個模型在同一資料集表現都很好，但彼此錯誤類型不同，哪種方法可進一步提升預測效果？",
    "answer": "集成學習（Ensemble），如投票或加權平均"
  },
  {
    "number": 190,
    "question": "下列哪一種增強學習方法運用在 AlphaGo 中用於策略優化？",
    "answer": "Policy Gradient 與 MCTS（蒙地卡羅樹搜索）"
  },
  {
    "number": 191,
    "question": "在大型語言模型中常提到的「Mask」是什麼用意？",
    "answer": "隱藏部分序列標記，迫使模型學習上下文"
  },
  {
    "number": 192,
    "question": "在訓練 NLP 模型時，若輸入序列長度非常大，傳統 RNN 容易遇到什麼問題？",
    "answer": "梯度消失或梯度爆炸"
  },
  {
    "number": 193,
    "question": "為了防止語音模型在錄製時雜訊或環境不同造成辨識困難，可採用何種方法？",
    "answer": "在模型預處理階段做語音增強或加入雜訊 Data Augmentation"
  },
  {
    "number": 194,
    "question": "在高維度資料中常使用「隨機投影（Random Projection）」做降維，其核心想法是什麼？",
    "answer": "用隨機矩陣將資料映射到較低維空間，保留距離性質"
  },
  {
    "number": 195,
    "question": "在文本分類任務中，若語料中存在「錯別字」或「簡繁混雜」，該如何應對？",
    "answer": "使用文字正規化或簡繁轉換與拼字校正"
  },
  {
    "number": 196,
    "question": "在建構表格型資料的迴歸模型時，若目標變量分佈極度偏斜，可嘗試哪種處理？",
    "answer": "將目標取對數或其他函數轉換"
  },
  {
    "number": 197,
    "question": "在資料可視化中，若想呈現連續數值分佈，常用的圖表是哪一種？",
    "answer": "直方圖（Histogram）"
  },
  {
    "number": 198,
    "question": "哪一種技術可顯著降低推理計算量，適合在行動裝置部署？",
    "answer": "量化（Quantization）"
  },
  {
    "number": 199,
    "question": "下列哪一種增強學習（強化學習）方法不是基於價值函數（Value-based）的？",
    "answer": "Policy Gradient（策略梯度）"
  },
  {
    "number": 200,
    "question": "在分類問題中，若類別分布極端失衡，哪項方法可更客觀地評估模型好壞？",
    "answer": "混淆矩陣與 Precision, Recall, F1-score"
  },
  {
    "number": 201,
    "question": "AI 幫忙做雇主給員工的「薪資調整建議」可能帶來啥風險？",
    "answer": "公平性與歧視風險"
  },
  {
    "number": 202,
    "question": "如果企業同時需要 AI 做「數據分析+文本生成」，可能怎麼做？",
    "answer": "結合傳統 BI 報表與大語言模型（AI）的整合，讓 AI 輸出分析結論"
  },
  {
    "number": 203,
    "question": "在文本情感分析中，若要判斷「某句話是正面、負面還是中立」，屬於哪類任務？",
    "answer": "多類分類"
  },
  {
    "number": 204,
    "question": "「Q-learning」是一種離線策略，表示什麼？",
    "answer": "可使用與當前策略不同的行動來更新 Q 值"
  },
  {
    "number": 205,
    "question": "何謂「多輪 Prompt」，在 No Code 中如何實現？",
    "answer": "每次 AI 回覆後，將上下文帶回下一輪 Prompt"
  },
  {
    "number": 206,
    "question": "哪種 Prompt 寫法能促進 AI 給出更詳細步驟？",
    "answer": "「請逐步解釋你的想法並分段敘述」"
  },
  {
    "number": 207,
    "question": "在 AI 團隊協同工作中，常使用「Kanban」或「Scrum」做什麼？",
    "answer": "進行專案管理與任務分配"
  },
  {
    "number": 208,
    "question": "如果某模型在小規模測試集上表現極佳，但在大規模線上數據中表現下滑，可能原因是？",
    "answer": "測試集與線上數據分佈不一致"
  },
  {
    "number": 209,
    "question": "在使用群眾外包平台標註資料時，如何提高標註品質？",
    "answer": "提供清晰標註指引，做多重標註並取共識"
  },
  {
    "number": 210,
    "question": "為確保生成式 AI 所用數據集「合法來源」，最常見做法？",
    "answer": "簽訂數據使用協定，並清查版權/個資合規"
  },
  {
    "number": 211,
    "question": "「可聽化 AI」（TTS 結合 LLM）若用於客服，需避免什麼？",
    "answer": "聲音侵犯藝人肖像或誤導客戶"
  },
  {
    "number": 212,
    "question": "在强化學習應用中，若環境回饋存在延遲（delayed reward），需考量什麼？",
    "answer": "動態規劃與長期回報，以評估完整策略"
  },
  {
    "number": 213,
    "question": "當 AI 用於客服，若顧客要求刪除對話紀錄怎辦？",
    "answer": "提供資料刪除機制，符合隱私法要求"
  },
  {
    "number": 214,
    "question": "如何在 Low Code 中「動態選擇使用溫度=0.1 或 0.9」？",
    "answer": "流程加分支：若需要嚴謹回答則 0.1，若需創意回答則 0.9"
  },
  {
    "number": 215,
    "question": "調整生成式 AI 讓其「更具行銷煽動性」時，要避免什麼？",
    "answer": "誤導、虛假宣傳，導致法律問題或傷害品牌公信力"
  },
  {
    "number": 216,
    "question": "哪種設計能防止使用者於 Prompt 輸入過多機密訊息？",
    "answer": "提醒對話不記名、限制輸入字數與敏感詞檢測"
  },
  {
    "number": 217,
    "question": "在決策樹學習中，若節點純度已足夠或資料量不足，演算法會怎麼處理該節點？",
    "answer": "停止分裂，形成葉節點"
  },
  {
    "number": 218,
    "question": "何謂「AutoML」？",
    "answer": "自動化地選擇模型、特徵工程與超參數調整，以最少人為干預完成 ML 管線"
  },
  {
    "number": 219,
    "question": "若某關鍵業務流程（如合併報表）都依賴 AI 產生最終數字，怎樣降低依賴風險？",
    "answer": "保留人工審核與備援計算流程"
  },
  {
    "number": 220,
    "question": "在資料庫中使用索引能加速查詢，但索引過多可能造成什麼？",
    "answer": "插入或更新操作變慢，因需維護索引"
  },
  {
    "number": 221,
    "question": "何謂「Imbalanced Learning（不平衡學習）」最主要的困境？",
    "answer": "多數類占比極高，少數類幾乎被忽視，造成模型難以識別少數類"
  },
  {
    "number": 222,
    "question": "若你發現模型在不同硬體（GPU、CPU）或不同 batch size 下推理結果略有差異，可能原因是？",
    "answer": "深度學習計算順序有浮點數誤差積累，造成結果不完全一致"
  },
  {
    "number": 223,
    "question": "在 Low Code + AI 之中，如果某功能需要隱私相當高，應？",
    "answer": "在流程中設置私有部署 AI 或本地化服務"
  },
  {
    "number": 224,
    "question": "面對「AI 生成的作品是否受著作權保護」的爭議，企業應？",
    "answer": "在合約或使用條款中明訂 AI 生成之版權歸屬與限制"
  },
  {
    "number": 225,
    "question": "在 ML 專案中，若要縮短開發流程並自動化重複工作，常使用哪種方法論？",
    "answer": "MLOps"
  },
  {
    "number": 226,
    "question": "若要減少多層感知器中參數量，可使用「Bottleneck Layer」做什麼？",
    "answer": "在中間添加較少神經元的一層，壓縮表示維度"
  },
  {
    "number": 227,
    "question": "為何建議企業在 AI 文案生成中標註「由 AI 輔助產生」？",
    "answer": "透明度，可避免用戶誤以為是人類撰寫"
  },
  {
    "number": 228,
    "question": "當大型企業建置內部「Low Code + AI 應用商店」，用意何在？",
    "answer": "讓員工能自助式安裝、複用內部開發的 AI 模組"
  },
  {
    "number": 229,
    "question": "「機器人手臂的路徑規劃」常用哪種 AI 方法？",
    "answer": "強化學習或運籌路徑搜尋"
  },
  {
    "number": 230,
    "question": "企業用 AI 做智能問答：若用戶問到競爭對手資訊，可否自由回答？",
    "answer": "需考慮公司政策，避免洩露商業機密或誹謗對手"
  },
  {
    "number": 231,
    "question": "在影像分類競賽中，若發現排行榜前幾名大多使用大型深度網路或集成，這代表什麼趨勢？",
    "answer": "深度模型能在圖像任務取得高準確度"
  },
  {
    "number": 232,
    "question": "何謂「蒸餾知識（Knowledge Distillation）」中的 Teacher-Student 架構？",
    "answer": "大模型（Teacher）指導小模型（Student）學習，大幅縮小模型規模"
  },
  {
    "number": 233,
    "question": "一些 AI 工具允許「自定義 Embedding」以在檢索中使用，這在企業中有何用？",
    "answer": "幫助更精確地對內部文檔向量化檢索"
  },
  {
    "number": 234,
    "question": "未來生成式 AI 與 No Code 發展可能呈現哪種趨勢？",
    "answer": "AI 可根據自然語言自動構建完整應用，低程式碼/零程式碼更易落地"
  },
  {
    "number": 235,
    "question": "「Prompt 分析工具」在企業中做什麼？",
    "answer": "追蹤各部門使用的 Prompt 與結果，以優化與共用最佳 Practice"
  },
  {
    "number": 236,
    "question": "企業要 AI 自動回應社群留言，但擔憂生成回覆失言，該怎麼做？",
    "answer": "設置白名單式回覆或人工審核某些敏感留言"
  },
  {
    "number": 237,
    "question": "企業若要 AI 幫客戶做「個人化建議」但防止產生敏感個資處理，最妥做法是？",
    "answer": "提前做匿名化與欄位隔離"
  },
  {
    "number": 238,
    "question": "當模型預測錯誤帶來極高風險時（如醫療診斷），通常會設定較高什麼門檻？",
    "answer": "置信閾值（Confidence Threshold）"
  },
  {
    "number": 239,
    "question": "“AI Governance” 在企業指的是？",
    "answer": "建立內部規範、政策、倫理檢查與風險管理體系"
  },
  {
    "number": 240,
    "question": "在 MLOps 中，若要自動化地將新數據或模型更新持續部署到生產環境，常使用什麼流程？",
    "answer": "CI/CD（Continuous Integration / Continuous Deployment）"
  },
  {
    "number": 241,
    "question": "如果想檢測「是否存在數據偏見」，例如某群體在模型中被系統性地低估或高估，可用什麼工具？",
    "answer": "AI Fairness 360 或公平性檢測框架"
  },
  {
    "number": 242,
    "question": "假設要將特定數據表以 API 的形式對外提供預測服務，哪種做法屬於最佳實踐？",
    "answer": "建立一個 API 服務，後端載入已訓練好的模型並提供推理"
  },
  {
    "number": 243,
    "question": "當想衡量一個模型在「時間序列」上的預測誤差，哪一個指標較常見？",
    "answer": "MAPE（平均絕對百分比誤差）"
  },
  {
    "number": 244,
    "question": "若語言模型太大，在單張 GPU 無法放下，需採取什麼分佈式策略？",
    "answer": "Pipeline Parallel 或 Model Parallel"
  },
  {
    "number": 245,
    "question": "自然語言生成（NLG）模型若想生成不同風格的文字，如正式文體、口語化等，通常需要？",
    "answer": "在訓練資料中標記風格或設定條件向量"
  },
  {
    "number": 246,
    "question": "AI 若整合到檔案管理系統做「自動摘要+標籤」，哪個效果最受期待？",
    "answer": "檔案搜尋效率提升，且快速理解每檔案重點"
  },
  {
    "number": 247,
    "question": "為何有些生成式模型會透過「自注意力」來同時關注序列的不同部分？",
    "answer": "讓模型可在同一層面考慮序列各位置，捕捉上下文關係"
  },
  {
    "number": 248,
    "question": "企業導入 AI 之後，若某部門單獨微調模型，有哪些風險？",
    "answer": "產生與其他部門不一致的回答"
  },
  {
    "number": 249,
    "question": "在視覺題材中，若要同時輸出像素級分類結果並區分不同目標（物件實例），可用什麼技術？",
    "answer": "實例分割（Instance Segmentation）"
  },
  {
    "number": 250,
    "question": "在 CNN 處理影像時，常使用 Padding 的原因是？",
    "answer": "在卷積時保留邊界資訊，避免尺寸過度縮減"
  },
  {
    "number": 251,
    "question": "何謂「One-Class SVM」？",
    "answer": "專門偵測只有一個類別資料的偏差點或異常值"
  },
  {
    "number": 252,
    "question": "AI 產生的圖像若用於醫療診斷輔助，應如何符合法律倫理？",
    "answer": "需明確區分「真實影像」與「AI 生成」，並遵守醫療影像使用規範"
  },
  {
    "number": 253,
    "question": "使用 AI 幫員工寫「年度學習計畫」，如何讓員工接受度更高？",
    "answer": "讓員工可在 AI 產出基礎上自行調整，並強調是輔助"
  },
  {
    "number": 254,
    "question": "當使用 LSTM 時，哪個門（Gate）負責決定要從單元狀態中忘記多少舊資訊？",
    "answer": "忘記門（Forget Gate）"
  },
  {
    "number": 255,
    "question": "在非監督的詞向量學習（如 Word2Vec），模型學到的是？",
    "answer": "詞與詞之間的共現或語意相似度"
  },
  {
    "number": 256,
    "question": "在醫療影像「斷層掃描結果」加上 AI 生成報告中，影像所見如果被硬編造，後果是？",
    "answer": "嚴重醫療誤判"
  },
  {
    "number": 257,
    "question": "若想讓模型能夠在推理時對某些不確定輸入說「我不確定」，可行作法是？",
    "answer": "使用 Bayesian Neural Network 或設置置信區間機制"
  },
  {
    "number": 258,
    "question": "在機器學習訓練過程中，若產生「模式崩塌」多指哪種模型？",
    "answer": "生成對抗網路（GAN）"
  },
  {
    "number": 259,
    "question": "怎樣判斷一個回歸模型預測是否偏向大值或小值？",
    "answer": "查看殘差分佈，若在大值或小值處系統性偏高或偏低，代表模型偏向"
  },
  {
    "number": 260,
    "question": "Low Code 若要將 AI 呼叫封裝成「可重複使用的組件」意義在哪？",
    "answer": "讓不同業務能直接拖曳該組件進行復用"
  },
  {
    "number": 261,
    "question": "下列哪種格式最常用於標註目標檢測數據集（如 bounding box 坐標）？",
    "answer": "Pascal VOC 或 COCO JSON"
  },
  {
    "number": 262,
    "question": "在貝葉斯分類器中，若假設特徵相互獨立，便是什麼模型？",
    "answer": "Naive Bayes"
  },
  {
    "number": 263,
    "question": "在影像增強的同時，若想確保對應的標籤（例如 bounding box）也能同步變換，稱作什麼？",
    "answer": "幾何一致性增強（Geometric Consistency）"
  },
  {
    "number": 264,
    "question": "生成式 AI 若能自動處理「多語音客服」，企業還需？",
    "answer": "維持專業客服人員支援複雜或情感化需求"
  },
  {
    "number": 265,
    "question": "「回應緩存」在聊天式 AI 有何作用？",
    "answer": "若用戶提出相同或相似問題，可直接返回之前的回答，節省 Token 與費用"
  },
  {
    "number": 266,
    "question": "在對話系統裡，若想讓模型先理解使用者的上下文，再生成回應，哪個模型較適合？",
    "answer": "RNN Seq2Seq with Attention 或 Transformer-based Encoder-Decoder"
  },
  {
    "number": 267,
    "question": "哪種 AI 工具最適合「創建 VR/AR 場景」之初步草圖？",
    "answer": "AI 圖像生成 + 3D 模型輔助（如專門的擴散模型）"
  },
  {
    "number": 268,
    "question": "AI 生成對話或文案後，企業想自動加上機密聲明文字應如何做？",
    "answer": "在 Low Code 後置處理階段附加聲明"
  },
  {
    "number": 269,
    "question": "如果需要在嵌入式環境（如微控制器）上執行推理，應考慮什麼做法？",
    "answer": "模型剪枝、量化、知識蒸餾"
  },
  {
    "number": 270,
    "question": "哪種神經網路結構適合於即時地生成文本，並且可逐字進行預測？",
    "answer": "遞歸神經網路（RNN）或 Transformer 自迴歸機制"
  },
  {
    "number": 271,
    "question": "「AI 圖像生成 + No Code」做活動海報，若想確保品質可怎麼做？",
    "answer": "設計固定 Prompt 模板（含關鍵詞、風格描述）再手動挑選"
  },
  {
    "number": 272,
    "question": "使用 PCA 減少維度時，若只保留最前面幾個主成分，會遺失什麼？",
    "answer": "資料少量變異或細節資訊"
  },
  {
    "number": 273,
    "question": "何謂「Transformer Decoder」中常見的 Masked Self-Attention？",
    "answer": "屏蔽未來的 tokens，防止在生成時看到未來詞"
  },
  {
    "number": 274,
    "question": "提升機器翻譯質量時，常衡量產生句子與參考譯文的重疊度，最常用哪個指標？",
    "answer": "BLEU"
  },
  {
    "number": 275,
    "question": "在 No Code 平臺中，若使用者輸入超長的文字給 AI，可能導致什麼？",
    "answer": "Token 上限溢出或成本飆升"
  },
  {
    "number": 276,
    "question": "在機器學習專案中，若想提高「可解釋性」，又不想犧牲太多性能，可考慮什麼做法？",
    "answer": "使用決策樹或 XGBoost，並加上可視化特徵重要度"
  },
  {
    "number": 277,
    "question": "為什麼「少樣本微調（Few-Shot Fine-Tuning）」在企業領域受關注？",
    "answer": "幾十或幾百筆專業示例即可讓大模型具備專有領域能力"
  },
  {
    "number": 278,
    "question": "「可移植性」對企業 AI 應用有何重要性？",
    "answer": "讓應用能在不同雲平台或環境下切換，而不受侷限"
  },
  {
    "number": 279,
    "question": "若要讓低代碼流程自動生成「匯出顧客報告 PDF」，並寫上 AI 分析結論怎做？",
    "answer": "AI 生出結論後，經可視化 PDF 組件排版輸出"
  },
  {
    "number": 280,
    "question": "大模型生成程式碼若帶有 GPL 授權片段，但企業屬商業軟體怎辦？",
    "answer": "可能觸碰版權，需檢測並刪改該片段"
  },
  {
    "number": 281,
    "question": "當 AI 模型對「某國法規」回答錯誤時，可能造成？",
    "answer": "法律糾紛或誤導使用者違法"
  },
  {
    "number": 282,
    "question": "當想分析一群文本的共同主題（Topic），可能使用什麼非監督式技術？",
    "answer": "LDA（Latent Dirichlet Allocation）主題模型"
  },
  {
    "number": 283,
    "question": "在 TensorFlow 或 PyTorch 中，若想加快推理，可以怎麼做？",
    "answer": "使用模型量化、TensorRT 或 TorchScript 進行優化"
  },
  {
    "number": 284,
    "question": "在 CNN 設計時，若使用太多全連接層有什麼缺點？",
    "answer": "參數量暴增，易過擬合，推理慢"
  },
  {
    "number": 285,
    "question": "在實施「RLHF」時需要大量人工標註，該如何保護標註者？",
    "answer": "提供明確指令與心理支持，避免暴露於大量有害內容"
  },
  {
    "number": 286,
    "question": "如果 AI 工具以 Token 量計費，企業可怎樣控管「對話次數」？",
    "answer": "設定對話輪數或呼叫次數上限，並快取常見回答"
  },
  {
    "number": 287,
    "question": "當 AI 在 No Code 流程中自動生成「招聘啟事」，要阻擋可能帶歧視字眼怎做？",
    "answer": "建立關鍵詞過濾器 + Prompt 中聲明禁止提及種族、性別等歧視性詞彙"
  },
  {
    "number": 288,
    "question": "在 No Code 介面中，若要用 AI 圖像生成快速做「品牌社群貼圖」，最需注意？",
    "answer": "商標、肖像與版權合規"
  },
  {
    "number": 289,
    "question": "若在語音助手系統中，希望能夠不斷學習新詞彙與口音，屬於哪種能力？",
    "answer": "持續學習（Continuous Learning）或 Online Learning"
  },
  {
    "number": 290,
    "question": "若 AI 工具不支援中文，但公司主要市場在華語地區，怎麼辦？",
    "answer": "選擇支援中文的模型或在 Prompt 中要求繁/簡體中文"
  },
  {
    "number": 291,
    "question": "為何有些 AI 生成出現「排序不一致」或「前後衝突」？",
    "answer": "大模型並非邏輯機器，生成是根據機率，可能未保持整體一致性"
  },
  {
    "number": 292,
    "question": "若要偵測一段影片中出現了哪些物件、何時出現，可能使用什麼方法？",
    "answer": "CNN + RNN 或 3D 卷積進行動作辨識或影片中目標檢測"
  },
  {
    "number": 293,
    "question": "在資料分析中，若想根據篩選條件動態更新可視化，使用者可與圖表互動，適合哪種工具？",
    "answer": "Excel 樞紐分析或 BI 工具（如 Tableau、Power BI）"
  },
  {
    "number": 294,
    "question": "AI 模型在編寫後端程式碼可能遺漏安全檢查，應如何避免？",
    "answer": "做安全檢測工具或人工 Code Review"
  },
  {
    "number": 295,
    "question": "生成式 AI 幫忙優化客服郵件，是處於流程哪個階段？",
    "answer": "回覆生成階段"
  },
  {
    "number": 296,
    "question": "何謂「Temperature=0」對文本生成的影響？",
    "answer": "結果最保守、通常重現最高機率詞彙，創意度低"
  },
  {
    "number": 297,
    "question": "AI 可自動生成專業簡報，其在大企業的最大挑戰？",
    "answer": "是否符合集團品牌規範、數據真實度"
  },
  {
    "number": 298,
    "question": "假設你在進行一個 NLP 專案，需要同時處理分類（例如意圖識別）與序列標註（例如槽位填充），可採用下列哪種思路？",
    "answer": "多任務學習（MTL），共用部分參數，輸出層分離"
  },
  {
    "number": 299,
    "question": "在機器學習中，若資料特徵間量級差異很大，會帶來什麼問題？",
    "answer": "訓練收斂困難，某些特徵被過度主導"
  },
  {
    "number": 300,
    "question": "當一個 Low Code 流程需要同時「讀取 CRM 客戶資訊 + 生成個性化 Email + 送信」，應注意安全？",
    "answer": "設置 OAuth 或 API 金鑰保護，限制可讀取的客戶欄位"
  }
];
  const labels = ["A", "B", "C", "D"];

  function compact(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function charSet(value) {
    return new Set(compact(value).replace(/[\s???????()??"'\-+/]/g, "").split(""));
  }

  function similarity(a, b) {
    const left = charSet(a);
    const right = charSet(b);
    let score = 0;
    left.forEach((char) => {
      if (right.has(char)) score += 1;
    });
    return score;
  }

  function pickDistractors(item) {
    const correct = compact(item.answer);
    const scored = rawQuestions
      .filter((candidate) => candidate.number !== item.number && compact(candidate.answer) !== correct)
      .map((candidate) => ({
        text: compact(candidate.answer),
        score: similarity(item.question + " " + item.answer, candidate.question + " " + candidate.answer),
        distance: Math.abs(candidate.number - item.number),
      }))
      .sort((a, b) => b.score - a.score || a.distance - b.distance || a.text.localeCompare(b.text, "zh-Hant"));
    const distractors = [];
    scored.forEach((candidate) => {
      if (distractors.length < 3 && !distractors.includes(candidate.text)) distractors.push(candidate.text);
    });
    return distractors;
  }

  function buildOptions(item) {
    const correct = compact(item.answer);
    const distractors = pickDistractors(item);
    const correctIndex = item.number % labels.length;
    const ordered = [...distractors];
    ordered.splice(correctIndex, 0, correct);
    const options = {};
    labels.forEach((label, index) => {
      options[label] = ordered[index];
    });
    return {
      options,
      answer: labels[correctIndex],
      correctText: correct,
    };
  }

  window.PRACTICE_BANK = rawQuestions.map((item) => {
    const built = buildOptions(item);
    return {
      id: "practice-q" + item.number,
      number: item.number,
      question: compact(item.question),
      sectionTitle: "\u984c\u5eab\u7df4\u7fd2",
      source: "\u984c\u5eab\u7df4\u7fd2",
      options: built.options,
      answer: built.answer,
      correctText: built.correctText,
      explanation: "\u6b63\u89e3\uff1a" + built.correctText,
    };
  });
})();
