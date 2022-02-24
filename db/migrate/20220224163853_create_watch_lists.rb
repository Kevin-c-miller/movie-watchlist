class CreateWatchLists < ActiveRecord::Migration[7.0]
  def change
    create_table :watch_lists do |t|
      t.boolean :movie_watched
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
