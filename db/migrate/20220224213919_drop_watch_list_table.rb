class DropWatchListTable < ActiveRecord::Migration[7.0]
  def up
    drop_table :watch_lists
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
