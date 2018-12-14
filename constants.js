const guiTransitions = {

    SERVER_SENT_START: 30, //{type,order,tiles,board,score,score,time,total}                            // done Bisho
    SERVER_SENT_END: 31,                                                                                // done Bisho

    SERVER_SEND_INVALID: 32,//{type,reason,time,total}                                                  // done Bassem - [needs testing]

    MY_CHALLENGE_ACCEPTED: 53, //{type,column,row,direction,tiles,score,challengeTime,time,total}       // ? hn3mlha??

    /**
     * Will go to thinking
     * opponent da asdo el AI server hwa elbyl3ab
     */
    OPPONENT_PLAY_MOVE: 50,//{type,column,row,direction,tiles,score,challengeTime,time,total}           // done Bisho
    OPPONENT_PLAY_PASS: 51, //{type,time,total}                                                         // done Bassem
    OPPONENT_PLAY_EXCHANGE: 52,//{type,count,time,total}                                                // done Bassem
    OPPONENT_CHALLENEGE_REJECTED: 54,//{type,tiles,time,total}                                          // ? hn3mlha??

    /**
     * SEND MESSAGE WHILE GUI IS AWAIT_PLAY_RESPONSE
     */

    OPPONENT_CHALLENEGE_ACCEPTED: 55,                                                                   // done Bassem -[needs to be implemented]
    SEND_SCORE_TO_GUI: 56,//{score}                                                                     // done Bisho - [needs more testing]

    /**
     * SEND MESSAGE WHILE GUI IS IDLE
     */

    SEND_TILES_TO_GUI: 20,//{type,tiles}                                                                // doing Hager


    /**
     * RECEIVE A MESSAGE AFTER GUI FINISH ITS LOGIC
     */

    THINKING_SEND_PLAY_TO_S: 10,//{column,row,direction,tiles,score=-1}
    THINKING_SEND_EXCHANGE_TO_S: 11,//{tiles}
    THINKING_SEND_PASS_TO_S: 12,//Nothing
}