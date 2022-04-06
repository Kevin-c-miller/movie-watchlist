class AddColumnsToMovie < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :tagline, :string
    add_column :movies, :budget, :string
    add_column :movies, :revenue, :string
    add_column :movies, :movie_trailer, :string
  end
end
