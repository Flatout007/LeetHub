# Computes the minimum path sum of a grid from the top-left to the bottom-right
#
# @param grid [Array<Array<Integer>>] a two-dimensional array of integers representing the grid
# @return [Integer] the minimum path sum
def min_path_sum(grid)
  i = grid.length - 1

  until i == -1
    j = grid[0].length - 1

    until j == -1
      if i != grid.length - 1 && j == grid[0].length - 1
        grid[i][j] += grid[i + 1][j]
      elsif i == grid.length - 1 && j != grid[0].length - 1
        grid[i][j] += grid[i][j + 1]
      elsif i != grid.length - 1 && j != grid[0].length - 1
        grid[i][j] += [grid[i][j + 1], grid[i + 1][j]].min
      end

      j -= 1
    end

    i -= 1
  end

  grid[0][0]
end
