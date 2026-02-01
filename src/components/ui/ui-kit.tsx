import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export function UIKitButtons() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Filled Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 bg-[#4169E1] text-white rounded-lg font-medium hover:bg-[#3557C7] transition-colors shadow-md">
            Primary
          </button>
          <button className="px-6 py-2.5 bg-[#6B8EC3] text-white rounded-lg font-medium hover:bg-[#5A7DB2] transition-colors shadow-md">
            Secondary
          </button>
          <button className="px-6 py-2.5 bg-[#4CAF50] text-white rounded-lg font-medium hover:bg-[#45A049] transition-colors shadow-md">
            Success
          </button>
          <button className="px-6 py-2.5 bg-[#F44336] text-white rounded-lg font-medium hover:bg-[#DA3A2F] transition-colors shadow-md">
            Danger
          </button>
          <button className="px-6 py-2.5 bg-[#6B7C8B] text-white rounded-lg font-medium hover:bg-[#5A6B7A] transition-colors shadow-md">
            Warning
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Secondary Row</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 bg-[#4169E1] text-white rounded-lg font-medium hover:bg-[#3557C7] transition-colors">
            Warning
          </button>
          <button className="px-6 py-2.5 bg-[#1E90FF] text-white rounded-lg font-medium hover:bg-[#1A7FE6] transition-colors">
            Info
          </button>
          <button className="px-6 py-2.5 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
            Light
          </button>
          <button className="px-6 py-2.5 bg-[#2C3E50] text-white rounded-lg font-medium hover:bg-[#233140] transition-colors">
            Dark
          </button>
          <button className="px-6 py-2.5 text-[#4169E1] font-medium hover:underline transition-all">
            Link
          </button>
          <button className="px-6 py-2.5 bg-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Outline Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 border-2 border-[#4169E1] text-[#4169E1] bg-white rounded-lg font-medium hover:bg-[#4169E1] hover:text-white transition-colors">
            Primary
          </button>
          <button className="px-6 py-2.5 border-2 border-[#6B8EC3] text-[#6B8EC3] bg-white rounded-lg font-medium hover:bg-[#6B8EC3] hover:text-white transition-colors">
            Secondary
          </button>
          <button className="px-6 py-2.5 border-2 border-[#4CAF50] text-[#4CAF50] bg-white rounded-lg font-medium hover:bg-[#4CAF50] hover:text-white transition-colors">
            Success
          </button>
          <button className="px-6 py-2.5 border-2 border-[#F44336] text-[#F44336] bg-white rounded-lg font-medium hover:bg-[#F44336] hover:text-white transition-colors">
            Danger
          </button>
          <button className="px-6 py-2.5 border-2 border-[#6B7C8B] text-[#6B7C8B] bg-white rounded-lg font-medium hover:bg-[#6B7C8B] hover:text-white transition-colors">
            Warning
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Outline Secondary</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 border-2 border-[#4169E1] text-[#4169E1] bg-white rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Warning
          </button>
          <button className="px-6 py-2.5 border-2 border-[#1E90FF] text-[#1E90FF] bg-blue-50/50 rounded-lg font-medium hover:bg-blue-100 transition-colors">
            Info
          </button>
          <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-600 bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Light
          </button>
          <button className="px-6 py-2.5 border-2 border-[#2C3E50] text-[#2C3E50] bg-white rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Dark
          </button>
          <button className="px-6 py-2.5 text-[#4169E1] font-medium hover:underline transition-all">
            Link
          </button>
          <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-400 bg-white rounded-lg font-medium cursor-not-allowed" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
}

export function UIKitRadioButtons() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Radio Buttons</h3>
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <input type="radio" name="radio1" className="peer sr-only" id="r1" defaultChecked />
          <label htmlFor="r1" className="w-8 h-8 rounded-full border-[3px] border-[#4169E1] flex items-center justify-center cursor-pointer peer-checked:bg-transparent">
            <div className="w-4 h-4 bg-[#4169E1] rounded-full"></div>
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio2" className="peer sr-only" id="r2" />
          <label htmlFor="r2" className="w-8 h-8 rounded-full border-[3px] border-gray-400 flex items-center justify-center cursor-pointer"></label>
        </div>
        <div className="relative">
          <input type="radio" name="radio3" className="peer sr-only" id="r3" />
          <label htmlFor="r3" className="w-8 h-8 rounded-full border-[3px] border-[#4169E1] flex items-center justify-center cursor-pointer bg-white">
            <div className="w-3 h-3 bg-[#4169E1] rounded-full"></div>
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio4" className="peer sr-only" id="r4" />
          <label htmlFor="r4" className="w-10 h-10 rounded-full border-[3px] border-[#4169E1] flex items-center justify-center cursor-pointer bg-blue-100/50 shadow-lg">
            <div className="w-5 h-5 bg-[#4169E1] rounded-full"></div>
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio5" className="peer sr-only" id="r5" defaultChecked />
          <label htmlFor="r5" className="w-9 h-9 rounded-full border-[3px] border-[#4169E1] flex items-center justify-center cursor-pointer bg-white shadow-md">
            <Check className="w-5 h-5 text-[#4169E1]" />
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio6" className="peer sr-only" id="r6" defaultChecked />
          <label htmlFor="r6" className="w-10 h-10 rounded-full bg-[#4169E1] flex items-center justify-center cursor-pointer shadow-lg">
            <Check className="w-6 h-6 text-white" />
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio7" className="peer sr-only" id="r7" />
          <label htmlFor="r7" className="w-10 h-10 rounded-full bg-[#4169E1]/30 flex items-center justify-center cursor-pointer shadow-md">
            <div className="w-5 h-5 bg-[#4169E1] rounded-full"></div>
          </label>
        </div>
        <div className="relative">
          <input type="radio" name="radio8" className="peer sr-only" id="r8" />
          <label htmlFor="r8" className="w-9 h-9 rounded-full bg-[#6B8EC3]/40 flex items-center justify-center cursor-pointer"></label>
        </div>
        <div className="relative">
          <input type="radio" name="radio9" className="peer sr-only" id="r9" />
          <label htmlFor="r9" className="w-9 h-9 rounded-full bg-blue-200/60 flex items-center justify-center cursor-pointer"></label>
        </div>
        <div className="relative">
          <input type="radio" name="radio10" className="peer sr-only" id="r10" disabled />
          <label htmlFor="r10" className="w-8 h-8 rounded-full border-[3px] border-gray-300 flex items-center justify-center cursor-not-allowed opacity-50"></label>
        </div>
      </div>
    </div>
  );
}

export function UIKitInputs() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Text Input Forms</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <input 
          type="text" 
          placeholder="Username"
          className="px-4 py-3 border-2 border-[#4169E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30 transition-all"
        />
        <div className="relative">
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        <div className="relative">
          <input 
            type="search" 
            placeholder="Search"
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mt-4">
        <input 
          type="text" 
          value="Active"
          readOnly
          className="px-4 py-3 border-2 border-[#4169E1] bg-blue-50/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]/40 transition-all shadow-sm"
        />
        <input 
          type="text" 
          value="Disabled"
          disabled
          className="px-4 py-3 border-2 border-gray-300 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
        />
        <input 
          type="text" 
          value="Error"
          className="px-4 py-3 border-2 border-[#F44336] bg-white text-[#F44336] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F44336]/30 transition-all"
        />
        <div className="relative">
          <input 
            type="text" 
            value="Success"
            readOnly
            className="w-full px-4 py-3 pr-12 border-2 border-[#4CAF50] bg-white text-[#4CAF50] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/30 transition-all"
          />
          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4CAF50]" />
        </div>
      </div>
    </div>
  );
}

export function UIKitBoxes() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Boxes and Areas</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-full aspect-square border-2 border-[#4169E1] rounded-lg"></div>
        <div className="w-full aspect-square bg-blue-100/40 rounded-lg"></div>
        <div className="w-full aspect-square bg-white rounded-lg shadow-md border-t-4 border-t-[#4169E1]"></div>
        <div className="w-full aspect-square border-2 border-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export function UIKitMultiSelect() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Multi-select Buttons</h3>
      <div className="flex flex-wrap gap-3">
        <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 bg-white rounded-lg font-medium hover:border-[#4169E1] hover:text-[#4169E1] transition-colors">
          Option A
        </button>
        <button className="px-5 py-2.5 bg-[#4169E1] text-white rounded-lg font-medium flex items-center gap-2 shadow-md">
          <Check className="w-4 h-4" />
          Option B
        </button>
        <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 bg-white rounded-lg font-medium hover:border-[#4169E1] hover:text-[#4169E1] transition-colors">
          Option C
        </button>
        <button className="px-5 py-2.5 bg-[#4169E1] text-white rounded-lg font-medium shadow-md">
          Option D
        </button>
        <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 bg-white rounded-lg font-medium hover:border-[#4169E1] hover:text-[#4169E1] transition-colors">
          Option E
        </button>
      </div>
    </div>
  );
}

export function UIKitChips() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Choice Chips</h3>
      <div className="flex flex-wrap gap-2">
        <button className="px-5 py-2 bg-[#4169E1] text-white rounded-full font-medium shadow-md hover:bg-[#3557C7] transition-colors">
          All
        </button>
        <button className="px-5 py-2 bg-blue-100/60 text-[#4169E1] rounded-full font-medium hover:bg-blue-200/60 transition-colors">
          News
        </button>
        <button className="px-5 py-2 bg-blue-100/60 text-[#4169E1] rounded-full font-medium hover:bg-blue-200/60 transition-colors">
          Events
        </button>
        <button className="px-5 py-2 bg-blue-100/60 text-[#4169E1] rounded-full font-medium hover:bg-blue-200/60 transition-colors">
          Photos
        </button>
        <button className="px-5 py-2 bg-blue-100/60 text-[#4169E1] rounded-full font-medium hover:bg-blue-200/60 transition-colors">
          Videos
        </button>
        <button className="px-5 py-2 bg-blue-100/60 text-[#4169E1] rounded-full font-medium hover:bg-blue-200/60 transition-colors">
          More
        </button>
      </div>
    </div>
  );
}

export function UIKitShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">UI Kit Components</h1>
          <p className="text-lg text-gray-600">Современные компоненты для вашего проекта</p>
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitButtons />
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitRadioButtons />
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitInputs />
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitBoxes />
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitMultiSelect />
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <UIKitChips />
        </section>
      </div>
    </div>
  );
}
