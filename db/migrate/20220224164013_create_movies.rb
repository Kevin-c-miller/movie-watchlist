class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :poster
      t.string :rating
      t.text :synopsis
      t.string :director
      t.string :starring
      t.integer :release_year
      t.string :runtime
      t.references :user, null: false, foreign_key: true
  

      t.timestamps
    end
  end
end
