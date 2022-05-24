
def main():
    current_player = switch_player("")
    board = create_board()
    while not (has_winner(board) or is_a_tie(board)):
        print_board(board)
        player_input(current_player, board)
        current_player = switch_player(current_player)
    print_board(board)
    print("Good game. Thanks for playing!") 
# creat a board 
def create_board():
    board = []
    for square in range(9):
        board.append(square + 1)
    return board

# printing the game board 
def print_board(board):
    print(f"{board[0]}|{board[1]}|{board[2]}")
    print('-+-+-')
    print(f"{board[3]}|{board[4]}|{board[5]}")
    print('-+-+-')
    print(f"{board[6]}|{board[7]}|{board[8]}")

# checking the tie
def is_a_tie(board):
    for square in range(9):
        if board[square] != "x" and board[square] != "o":
            return False
    return True 

def has_winner(board):
    return (board[0] == board[1] == board[2] or
            board[3] == board[4] == board[5] or
            board[6] == board[7] == board[8] or
            board[0] == board[3] == board[6] or
            board[1] == board[4] == board[7] or
            board[2] == board[5] == board[8] or
            board[0] == board[4] == board[8] or
            board[2] == board[4] == board[6])




# take player input 
def player_input(current_player, board): 
    inp = int(input(f"{current_player}'s turn to play (1-9): "))
    board[inp - 1] = current_player
  


# switch the player 
def switch_player(currentplayer):  
    if currentplayer == "" or currentplayer == "o":
        return "x"
    elif currentplayer == "x":
        return "o"


if __name__ == "__main__":
    main()





