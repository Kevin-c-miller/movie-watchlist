class RemoveWatchListIdFromMovies < ActiveRecord::Migration[7.0]
  def change
    remove_column :movies, :watch_list_id
  end
end
