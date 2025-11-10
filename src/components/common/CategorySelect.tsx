'use client';

import { useEffect, useRef, useState } from 'react';

type TCategorySelectProps = {
  categories: Array<{ id: string; name: string }>;
};

export default function CategorySelect({ categories }: TCategorySelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      try {
        const currentRef = dropdownRef.current;
        if (!currentRef) return;

        const target = event.target as Node;
        if (!currentRef.contains(target)) {
          setIsOpen(false);
        }
      } catch (error) {
        console.error('CategorySelect: Click outside handler failed', error);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    let timeoutId: NodeJS.Timeout;

    if (typeof document !== 'undefined') {
      timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
      }, 0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };
  }, [isOpen]);

  const getFilteredCategories = () => {
    const selectCategoryItem = categories[0];
    const notCategoryItem = categories[1];
    const levelCategories = categories.slice(2);

    if (selectedCategory === '' || selectedCategory === selectCategoryItem.id) {
      return levelCategories;
    } else {
      return [notCategoryItem, ...levelCategories];
    }
  };

  const filteredCategories = getFilteredCategories();

  const getButtonText = () => {
    if (selectedCategory === '' || selectedCategory === categories[0].id) {
      return categories[0].name;
    } else if (selectedCategory === categories[1].id) {
      return categories[0].name;
    } else {
      const selected = categories.find((cat) => cat.id === selectedCategory);
      return selected?.name || categories[0].name;
    }
  };

  const buttonText = getButtonText();
  const isNotCategorySelected =
    selectedCategory === '' ||
    selectedCategory === categories[0].id ||
    selectedCategory === categories[1].id;

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === categories[1].id) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(categoryId);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="font-roboto space-y-3 ml-auto max-w-[220px] mb-9 relative max-lg:mb-6.5 max-sm:ml-0"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-[220px] h-[48px] rounded-[24px] border border-[rgba(230,230,230,0.7)] px-4 pr-4 bg-transparent text-white font-normal text-base focus:outline-none focus:ring-2 focus:border-transparent transition-colors cursor-pointer flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={isNotCategorySelected ? 'text-gray-400' : 'text-white'}
        >
          {buttonText}
        </span>

        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="currentColor"
          className={`text-white transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path d="M0 0L5 6L10 0H0Z" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="w-[220px] rounded-[24px] border border-gray-400 py-2 bg-[rgba(7,7,8,1)] backdrop-blur-md absolute top-full left-0 right-0 mt-1 z-10 overflow-hidden opacity-100"
          role="listbox"
          aria-labelledby="category-select"
        >
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="relative w-[212px] h-[38px] mx-auto mb-1"
            >
              {selectedCategory === category.id && (
                <div
                  className="absolute inset-0 rounded-[20px]"
                  style={{
                    background:
                      'linear-gradient(92.35deg, #53FE43 -31.8%, #D9FE43 91.84%)',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                />
              )}

              <button
                type="button"
                onClick={() => handleCategorySelect(category.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategorySelect(category.id);
                  }
                  if (e.key === 'Escape') {
                    setIsOpen(false);
                  }
                }}
                role="option"
                aria-selected={selectedCategory === category.id}
                className={`hover:bg-gray-800/50 cursor-pointer transition-colors w-full h-full rounded-[20px] py-2 px-4 flex items-center justify-between relative z-10 focus:outline-none focus:ring-2 ${
                  selectedCategory === category.id
                    ? 'bg-[rgba(187,254,68,0.1)]'
                    : 'opacity-70 bg-transparent'
                }`}
              >
                <span className="text-white">{category.name}</span>
                {selectedCategory === category.id && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
