
export type gameMode = {
    gameRunning?:boolean,
    timer?:number,
    points?:number,
    moles?:boolean,
    gameMoles?:number[][]
    numberOfMoles?:number,
    image?:string,
    gameDone?:boolean,
    fastestTime?: number,
}


export type leaderboard = {
    name:string,
    points:number,
    speed:number
}

