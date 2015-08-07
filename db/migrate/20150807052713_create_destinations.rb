class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :city
      t.string :background_id
      t.string :overview
      t.string :culture
      t.string :transportation
      t.string :food
      t.string :entertainment
      t.string :code

      t.timestamps null: false
    end
  end
end
