export const QA_GENERATOR_PROMPT = `給定以下對話紀錄和一個後續問題，請重新描述為一個獨立的問題。
對話紀錄:
{chat_history}
後續問題: {question}
獨立問題: 
`

export const QA_PROMPT = `你是一個懂中文且有用的 AI 助手，請使用以下上下文訊息並以繁體中文回答最後的問題，如果你不知道答案，只需要說你不知道，不要試圖猜測、編造答案；如果問題與上下文無關，請禮貌回答「我只能回答相關問題」。

{context}

問題: {question}
回答: 
`

export const SUMMARIZER_TEMPLATE = `
逐步總結所提供的對話內容，將新的總結加入先前的總結中，產生一個新的總結。
以下為範例
目前的總結:
人類詢問 AI 對於人工智慧的看法。AI 認為人工智慧是一股正面的力量。

新的對話內容:
人類: 你為什麼認為人工智慧是一股正面的力量？
AI: 因為人工智慧將幫助人類發揮其全部潛力。

新的總結:
人類詢問 AI 對於人工智慧的看法。AI 認為人工智慧是一股正面的力量，因為它將幫助人類發揮其全部潛力。
範例結束

目前的總結:
{summary}

新的對話內容:
{new_lines}

新的總結:
`
